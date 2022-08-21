import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

export const addItemToCart = (itemsInCart, productToAdd) => {
  const newCartItems = addCartItem(itemsInCart, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeCartItem = (itemsInCart, productToRemove) => {
  const newCartItems = removeCartItemFromCart(itemsInCart, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (itemsInCart, productToClear) => {
  const newCartItems = clearCartItem(itemsInCart, productToClear);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const emptyCart = () => {
  return createAction(CART_ACTION_TYPES.EMPTY_CART_ITEMS, []);
};

// FUNCIONS
export const addCartItem = (cartItems, productToAdd) => {
  const doesItemExist = cartItems.find((item) => {
    return item.id === productToAdd.id;
  });
  if (doesItemExist) {
    const newItems = cartItems.map((item) => {
      if (item.id === productToAdd.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return newItems;
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

export const removeCartItemFromCart = (cartItems, cartItemToRemove) => {
  const doesItemExist = cartItems.find((item) => {
    return item.id === cartItemToRemove.id;
  });
  if (doesItemExist.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemToRemove.id);
  }

  const newItems = cartItems.map((item) => {
    if (item.id === cartItemToRemove.id) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });
  return newItems;
};

export const clearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((product) => product.id !== cartItemToClear.id);
};
