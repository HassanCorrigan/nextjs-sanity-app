const StoreReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        cartItems: [action.payload, ...state.cartItems],
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          product => product._id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default StoreReducer;
