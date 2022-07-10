import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocument,
} from '../utils/firebase/firebase.utils';

const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocument(user);
      }
      // console.log(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useGlobalUserContextHook = () => {
  return React.useContext(UserContext);
};
