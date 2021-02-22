const StoreReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      // Set the inital cart state from local storage
      return {
        ...state,
        cartItems: action.payload,
      };

    case 'ADD_PRODUCT':
      // Check if product is already in cart
      const alreadyExists = state.cartItems.some(
        product => product._id === action.payload._id
      );
      if (alreadyExists) {
        // If it's already in cart, update the quantity by adding 1
        return {
          ...state,
          cartItems: state.cartItems.map(product =>
            product._id === action.payload._id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      } else {
        // Otherwise, add the item to the cart with a new quantity value of 1.
        return {
          ...state,
          cartItems: [{ ...action.payload, quantity: 1 }, ...state.cartItems],
        };
      }

    case 'REMOVE_PRODUCT':
      // Filter array and return new array without specific item.
      return {
        ...state,
        cartItems: state.cartItems.filter(
          product => product._id !== action.payload
        ),
      };

    case 'UPDATE_QUANTITY':
      // Update by finding the product and setting the new quantity as the passed payload
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
