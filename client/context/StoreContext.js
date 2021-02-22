import { createContext, useContext, useReducer, useEffect } from 'react';
import StoreReducer from 'context/StoreReducer';

const initialState = {
  cartItems: [],
};

const StoreContext = createContext(initialState);

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState);

  // Set initial cart state from local storage, otherwise set as blank array
  useEffect(() => {
    const persistantCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(persistantCart);
  }, []);

  // Set local storage every time cart is updated
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cartItems));
  }, [state]);

  // Actions
  const setCart = cartItems => {
    dispatch({
      type: 'SET_CART',
      payload: cartItems,
    });
  };

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
