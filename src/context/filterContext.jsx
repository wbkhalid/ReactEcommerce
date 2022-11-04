import { createContext, useContext, useReducer, useEffect } from 'react';
import { useProductContext } from './productcontext';
import reducer from '../reducer/filterReducer';

export const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: 'lowest',
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: 'SET_GRID_VIEW' });
  };

  const setListView = () => {
    return dispatch({ type: 'SET_LIST_VIEW' });
  };

  const sorting = (e) => {
    let userValue= e.target.value
    dispatch({ type: 'GET_SORT_VALUE' , payload:userValue});
  };

  useEffect(() => {
    dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products });
  }, [products]);

  useEffect(() => {
   dispatch({type:'SORTING_PRODUCTS' ,payload:products})
  }, [state.sorting_value]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
