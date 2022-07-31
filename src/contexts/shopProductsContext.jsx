import React, { useEffect, useContext, useState } from 'react';

import { getCollectionAndDocument } from '../utils/firebase/firebase.utils';

const shopProductsContext = React.createContext();

export const ShopProductsContextProvider = ({ children }) => {
  const [shopProducts, setShopProducts] = useState(null);

  useEffect(() => {
    setShopProducts([]);
  }, []);

  useEffect(() => {
    const categoriesMap = async () => {
      const response = await getCollectionAndDocument();
      setShopProducts(response);
    };
    categoriesMap();
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
