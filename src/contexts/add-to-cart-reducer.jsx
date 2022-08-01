export const ACTIONS = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
};

// REDUCER
export const cartReducer = (state, { type, payload }) => {
  if (type === ACTIONS.SET_CART_ITEMS) {
    // console.log('hello');
    return { ...state, ...payload };
  }

  throw new Error(`unhandled type ${type}`);
};
// END OF REDUCER

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
// END OF FUNCTIONS
