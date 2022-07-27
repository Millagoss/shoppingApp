import React, { useEffect, useState, useReducer } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocument,
} from '../utils/firebase/firebase.utils';

const UserContext = React.createContext();

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: payload };

    default:
      throw new Error(`unhandled type ${type} in userReducer`);
  }
};

const INITIAL_USER_STATE = {
  currentUser: null,
};

export const UserContextProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(
    userReducer,
    INITIAL_USER_STATE
  );

  const setCurrentUser = (user) => {
    dispatch({ type: 'SET_CURRENT_USER', payload: user });
  };

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
