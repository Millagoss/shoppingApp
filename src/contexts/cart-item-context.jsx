import React, { useContext, useState } from 'react';

const cartStateContext = React.createContext();

export const CartStateContextProvider = ({ children }) => {
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);

  const value = { isCartDropdownOpen, setIsCartDropdownOpen };
  return (
    <cartStateContext.Provider value={value}>
      {children}
    </cartStateContext.Provider>
  );
};

export const useGlobalCartStateContextHook = () => {
  return useContext(cartStateContext);
};
