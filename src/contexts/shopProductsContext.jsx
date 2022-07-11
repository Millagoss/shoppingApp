import React, { useEffect, useContext, useState } from 'react';
import shopData from '../shop-data.json';

const shopProductsContext = React.createContext();

export const ShopProductsContextProvider = ({ children }) => {
  const [shopProducts, setShopProducts] = useState([]);

  useEffect(() => {
    setShopProducts(shopData);
  }, []);

  const value = { shopProducts, setShopProducts };
  return (
    <shopProductsContext.Provider value={value}>
      {children}
    </shopProductsContext.Provider>
  );
};

export const useGlobalShopProductsContext = () => {
  return useContext(shopProductsContext);
};
