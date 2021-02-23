import { createContext, useContext, useReducer, useEffect } from 'react';
import StoreReducer from 'context/StoreReducer';

const initialState = {
  cartItems: [],
};

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  /** Set initial cart state from local storage, otherwise set as blank array. */
  useEffect(() => {
    const persistantCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(persistantCart);
  }, []);

  /** Save cart items to local storage every time cart is updated. */
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cartItems));
  }, [state]);

  /** Actions */
  /**
   * Dispatches to reducer, passes in an array of objects as the payload.
   * @param {array} cartItems
   */
  const setCart = cartItems => {
    dispatch({
      type: 'SET_CART',
      payload: cartItems,
    });
  };

  /**
   * Dispatches to reducer, passes in a product object as the payload.
   * @param {object} product
   */
  const addProduct = product => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: product,
    });
  };

  /**
   * Dispatches to reducer, passes in an ID string as the payload.
   * @param {string} id
   */
  const removeProduct = id => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: id,
    });
  };

  /**
   * Dispatches to reducer, passes in an ID string for the
   * product to be updated and the quantity number to set as the payload.
   * @param {string} id
   * @param {number} quantity
   */
  const updateQuantity = (id, quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity },
    });
  };

  return (
    <StoreContext.Provider
      value={{
        cartItems: state.cartItems,
        addProduct,
        removeProduct,
        updateQuantity,
      }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
