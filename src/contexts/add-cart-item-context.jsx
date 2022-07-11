import React, { useContext, useState } from 'react';
import { useEffect } from 'react';

const addItemToCartContext = React.createContext();

export const AddItemToCartContextProvider = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const count = itemsInCart.reduce((total, item) => {
      total += item.quantity;
      return total;
    }, 0);
    setCartCount(count);
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

  const value = { itemsInCart, setItemsInCart, addItemToCart, cartCount };
  return (
    <addItemToCartContext.Provider value={value}>
      {children}
    </addItemToCartContext.Provider>
  );
};

export const useGlobalAddItemToCartContext = () => {
  return useContext(addItemToCartContext);
};
