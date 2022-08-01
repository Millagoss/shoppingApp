import React, { useEffect, useReducer } from 'react';
import {
  onAuthStateChangedListener,
  createUserDocument,
} from '../utils/firebase/firebase.utils';

import { createAction } from '../utils/reducer/reducer.utils';

const ACTIONS = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
};

const UserContext = React.createContext();

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_CURRENT_USER:
      return { currentUser: payload };

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
    dispatch(createAction(ACTIONS.SET_CURRENT_USER, user));
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
