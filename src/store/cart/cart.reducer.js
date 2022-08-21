import { CART_ACTION_TYPES } from './cart.types';

const INITIAL_CART_STATE = {
  itemsInCart: [],
};

export const cartReducer = (state = INITIAL_CART_STATE, action = {}) => {
  const { type, payload } = action;

  if (type === CART_ACTION_TYPES.SET_CART_ITEMS) {
    // console.log('hello');
    return { ...state, itemsInCart: payload };
  }
  if (type === CART_ACTION_TYPES.EMPTY_CART_ITEMS) {
    // console.log('hello');
    return { ...state, itemsInCart: payload };
  }

  return state;
};
// END OF REDUCER
