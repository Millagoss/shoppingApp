import { combineReducers } from 'redux';
import { cartReducer } from './cart/cart.reducer';
import { categoriesReducer } from './shop-products/categories.reducer';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
