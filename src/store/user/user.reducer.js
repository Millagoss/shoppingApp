import { ACTION_TYPES } from './user.action.types';

const INITIAL_USER_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_USER_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.SET_CURRENT_USER:
      return { currentUser: payload };

    default:
      return state;
  }
};
