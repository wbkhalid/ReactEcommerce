import { createContext, useReducer, useContext, useEffect } from 'react';
import reducer from '../reducer/cartReducer';

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem('waleedCart');
  if (localCartData === []) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
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
    dispatch({ type: 'ADD_TO_CART', payload: { id, color, amount, product } });
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

  // Store in Local Storage

  useEffect(() => {
    dispatch({ type: 'CART_ITEM_PRICE_TOTAL' });
    localStorage.setItem('waleedCart', JSON.stringify(state.cart));
  }, [state.cart]);

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
