import { createContext, useContext, useReducer, useEffect } from 'react';
import { useProductContext } from './productcontext';
import reducer from '../reducer/filterReducer';

export const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: 'lowest',
  filters: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    price: 0,
    minPrice: 0,
    maxPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  //for Grid view
  const setGridView = () => {
    return dispatch({ type: 'SET_GRID_VIEW' });
  };

  //for list View

  const setListView = () => {
    return dispatch({ type: 'SET_LIST_VIEW' });
  };
  //Sorting Function
  const sorting = (e) => {
    let userValue = e.target.value;
    dispatch({ type: 'GET_SORT_VALUE', payload: userValue });
  };

  // Filter Function
  const updateFilterValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    return dispatch({ type: 'UPDATE_FILTER_VALUE', payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' });
  };

  useEffect(() => {
    dispatch({ type: 'LOAD_FILTER_PRODUCTS', payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: 'FILTER_PRODUCTS' });
    dispatch({ type: 'SORTING_PRODUCTS', payload: products });
  }, [state.sorting_value, state.filters]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
