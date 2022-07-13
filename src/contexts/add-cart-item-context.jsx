import React, { useContext, useState } from 'react';
import { useEffect } from 'react';

const addItemToCartContext = React.createContext();

export const AddItemToCartContextProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const count = itemsInCart.reduce((total, item) => {
      total += item.quantity;
      return total;
    }, 0);
    setCartCount(count);
  }, [itemsInCart]);

  useEffect(() => {
    setCartTotal(
      itemsInCart.reduce((total, curr) => {
        return total + curr.quantity * curr.price;
      }, 0)
    );
  }, [itemsInCart]);

  const addItemToCart = (product) => {
    const doesItemExist = itemsInCart.find((item) => {
      return item.id === product.id;
    });
    if (doesItemExist) {
      const newItems = itemsInCart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setItemsInCart(newItems);
    } else {
      setItemsInCart([...itemsInCart, { ...product, quantity: 1 }]);
    }
  };

  const incrementQuantity = (productToIncrement) => {
    addItemToCart(productToIncrement);
  };
  const decrementQuantity = (productToDecrement) => {
    if (productToDecrement.quantity === 1) {
      const filteredItems = itemsInCart.filter(
        (item) => item.id !== productToDecrement.id
      );
      setItemsInCart(filteredItems);
      return;
    }

    const newItems = itemsInCart.map((item) => {
      if (item.id === productToDecrement.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItemsInCart(newItems);
  };

  const clearCartItem = (productToClear) => {
    const newCartItems = itemsInCart.filter(
      (product) => product.id !== productToClear.id
    );
    setItemsInCart(newCartItems);
  };

  const value = {
    itemsInCart,
    setItemsInCart,
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
