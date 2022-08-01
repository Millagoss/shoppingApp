import React, { useContext, useReducer } from 'react';

import {
  cartReducer,
  addCartItem,
  removeCartItemFromCart,
  clearCartItem,
} from './add-to-cart-reducer';

import { ACTIONS } from './add-to-cart-reducer';

import { createAction } from '../utils/reducer/reducer.utils';

const addItemToCartContext = React.createContext();

const INITIAL_CART_STATE = {
  itemsInCart: [],
  cartCount: 0,
  cartTotal: 0,
};

export const AddItemToCartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);

  const updateCartReducer = (newCartItems) => {
    const count = newCartItems.reduce(
      (total, item) => (total += item.quantity),
      0
    );
    console.log(count);
    const total = newCartItems.reduce(
      (total, curr) => total + curr.quantity * curr.price,
      0
    );

    dispatch(
      createAction(ACTIONS.SET_CART_ITEMS, {
        itemsInCart: newCartItems,
        cartCount: count,
        cartTotal: total,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(state.itemsInCart, productToAdd);
    updateCartReducer(newCartItems);
  };

  const removeCartItem = (productToRemove) => {
    const newCartItems = removeCartItemFromCart(
      state.itemsInCart,
      productToRemove
    );
    updateCartReducer(newCartItems);
  };

  const clearItemFromCart = (productToClear) => {
    const newCartItems = clearCartItem(state.itemsInCart, productToClear);
    updateCartReducer(newCartItems);
  };

  const { itemsInCart, cartCount, cartTotal } = state;
  const value = {
    itemsInCart,
    // setItemsInCart,
    addItemToCart,
    removeCartItem,
    clearItemFromCart,
    cartCount,
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
