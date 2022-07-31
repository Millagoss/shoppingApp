export const cartReducer = (state, { type, payload }) => {
  if (type === 'ADD_ITEM_TO_CART') {
    const doesItemExist = state.itemsInCart.find((item) => {
      return item.id === payload.id;
    });
    if (doesItemExist) {
      const newItems = state.itemsInCart.map((item) => {
        if (item.id === payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return { ...state, itemsInCart: newItems };
    } else {
      return {
        ...state,
        itemsInCart: [...state.itemsInCart, { ...payload, quantity: 1 }],
      };
    }
  }

  if (type === 'DECREMENT_PRODUCT_QUANTITY') {
    if (payload.quantity === 1) {
      const filteredItems = state.itemsInCart.filter(
        (item) => item.id !== payload.id
      );
      return { ...state, itemsInCart: filteredItems };
    }

    const newItems = state.itemsInCart.map((item) => {
      if (item.id === payload.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    return { ...state, itemsInCart: newItems };
  }

  if (type === 'CLEAR_ITEM') {
    const newCartItems = state.itemsInCart.filter(
      (product) => product.id !== payload.id
    );
    return { ...state, itemsInCart: newCartItems };
  }

  if (type === 'TOTAL_QUANTITY') {
    const count = state.itemsInCart.reduce((total, item) => {
      total += item.quantity;
      return total;
    }, 0);
    return { ...state, cartCount: count };
  }

  if (type === 'GET_TOTAL') {
    const total = state.itemsInCart.reduce((total, curr) => {
      return total + curr.quantity * curr.price;
    }, 0);
    return { ...state, cartTotal: total };
  }

  throw new Error(`unhandled type ${type}`);
};
