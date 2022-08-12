import { createSelector } from 'reselect';

export const selectCartItems = (state) => state.cart;

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartReducer) =>
    cartReducer.itemsInCart.reduce((total, item) => (total += item.quantity), 0)
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartReducer) =>
    cartReducer.itemsInCart.reduce(
      (total, curr) => total + curr.quantity * curr.price,
      0
    )
);
