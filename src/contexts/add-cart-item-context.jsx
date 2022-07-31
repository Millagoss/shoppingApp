import React, { useContext, useState, useReducer } from 'react';
import { useEffect } from 'react';

import { cartReducer } from './add-to-cart-reducer';

const addItemToCartContext = React.createContext();

const INITIAL_CART_STATE = {
  itemsInCart: [],
  cartCount: 0,
  cartTotal: 0,
};

export const AddItemToCartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);

  useEffect(() => {
    dispatch({ type: 'TOTAL_QUANTITY' });
  }, [state.itemsInCart]);

  useEffect(() => {
    dispatch({ type: 'GET_TOTAL' });
  }, [state.itemsInCart]);

  const addItemToCart = (product) => {
    dispatch({ type: 'ADD_ITEM_TO_CART', payload: product });
  };

  const incrementQuantity = (productToIncrement) => {
    dispatch({ type: 'ADD_ITEM_TO_CART', payload: productToIncrement });
  };

  const decrementQuantity = (productToDecrement) => {
    dispatch({
      type: 'DECREMENT_PRODUCT_QUANTITY',
      payload: productToDecrement,
    });
  };

  const clearCartItem = (productToClear) => {
    dispatch({ type: 'CLEAR_ITEM', payload: productToClear });
  };

  const { itemsInCart, cartCount, cartTotal } = state;
  const value = {
    itemsInCart,
    // setItemsInCart,
    addItemToCart,
    cartCount,
    incrementQuantity,
    decrementQuantity,
    clearCartItem,
    cartTotal,
  };
  return (
    <addItemToCartContext.Provider value={value}>
      {children}
    </addItemToCartContext.Provider>
  );
};

export const useGlobalAddItemToCartContext = () => {
  return useContext(addItemToCartContext);
};
