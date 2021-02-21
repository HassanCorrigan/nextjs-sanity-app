import { createContext, useContext, useReducer } from 'react';
import StoreReducer from 'context/StoreReducer';

const initialState = {
  cartItems: [],
};

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  // Actions
  const addProduct = product => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: product,
    });
  };
  const removeProduct = id => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: id,
    });
  };

  return (
    <StoreContext.Provider
      value={{ cartItems: state.cartItems, addProduct, removeProduct }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
