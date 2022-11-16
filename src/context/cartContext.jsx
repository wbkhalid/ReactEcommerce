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

  const removeItem =(id)=>{
    dispatch({type:"REMOVE_ITEM", payload:id})
  }
  return (
    <CartContext.Provider value={{ ...state, AddtoCart,removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
