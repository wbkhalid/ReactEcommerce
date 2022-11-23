import { createContext, useReducer, useContext, useEffect } from 'react';
import reducer from '../reducer/cartReducer';

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem('waleedCart');
  if (
    !Array.isArray(JSON.parse(localCartData)) ||
    !JSON.parse(localCartData).length
  ) {
    console.log('is empty');
    console.log('is empty');
    console.log('is empty');

    return [];
  } else if (
    !Array.isArray(JSON.parse(localCartData)) ||
    JSON.parse(localCartData).length
  ) {
    console.log('is not empty');
    console.log('is not empty');
    console.log('is not empty');

    return JSON.parse(localCartData);
  }

  console.log('is not empty');
  console.log('is not empty');
  console.log('is not empty');

  return [];
};

const initialState = {
  cart: getLocalCartData(),
  total_item: '',
  total_price: '',
  shipping_fee: 5000,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddtoCart = (id, color, amount, product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, color, amount, product },
    });
  };

  const setIncrease = (id) => {
    dispatch({ type: 'SET_INCREASE', payload: id });
  };

  const setDecrease = (id) => {
    dispatch({ type: 'SET_DECREASE', payload: id });
  };

  // Remove item from Cart
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  // Clear Cart

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        AddtoCart,
        removeItem,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
