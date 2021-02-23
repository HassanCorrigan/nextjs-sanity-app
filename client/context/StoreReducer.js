const StoreReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      /** Set cartItems from the passed in payload. */
      return {
        ...state,
        cartItems: action.payload,
      };

    case 'ADD_PRODUCT':
      /** Check if product is already in cart. */
      const alreadyExists = state.cartItems.some(
        product => product._id === action.payload._id
      );

      if (alreadyExists) {
        /** If product already exists in cart, update the quantity by incrementing by 1. */
        return {
          ...state,
          cartItems: state.cartItems.map(product =>
            product._id === action.payload._id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      } else {
        /** Otherwise, add the new item to the cart with a new quantity value of 1. */
        return {
          ...state,
          cartItems: [{ ...action.payload, quantity: 1 }, ...state.cartItems],
        };
      }

    case 'REMOVE_PRODUCT':
      /** Filter cartItems array and return new array without specific item. */
      return {
        ...state,
        cartItems: state.cartItems.filter(
          product => product._id !== action.payload
        ),
      };

    case 'UPDATE_QUANTITY':
      /** Update quantity by finding the specific product and
       * setting the new quantity from the passed in payload. */
      return {
        ...state,
        cartItems: state.cartItems.map(product =>
          product._id === action.payload.id
            ? { ...product, quantity: action.payload.quantity }
            : product
        ),
      };

    default:
      return state;
  }
};

export default StoreReducer;
