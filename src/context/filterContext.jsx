import { createContext, useContext, useReducer, useEffect } from 'react';
import { useProductContext } from './productcontext';
import reducer from '../reducer/filterReducer';

export const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products });
  }, [products]);

  const setGridView = () => {
    return dispatch({ type: 'SET_GRID_VIEW' });
  };

  const setListView = () => {
    return dispatch({ type: 'SET_LIST_VIEW' });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
