const INITIAL_USER_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_USER_STATE, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'SET_CURRENT_USER':
      return { currentUser: payload };

    default:
      return state;
  }
};
