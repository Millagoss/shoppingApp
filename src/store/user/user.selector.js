import { createSelector } from 'reselect';

export const selectUserReducer = (state) => state.user;

export const selectCurrentUser = (state) => state.user.currentUser;

export const selectErrorCode = (state) => {
  // console.log(state.user.error);
  return { errorCode: state.user.error };
};
