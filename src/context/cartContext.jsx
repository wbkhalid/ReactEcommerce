import { createContext, useReducer, useContext } from 'react';
import reducer from '../reducer/cartReducer';

const CartContext = createContext();

const initialState = {
  cart: [],
  total_items: '',
  total_amount: '',
  shipping_fee: 5000,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddtoCart = (id, color, amount, product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { id, color, amount, product } });
  };
  return (
    <CartContext.Provider value={{ ...state, AddtoCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);