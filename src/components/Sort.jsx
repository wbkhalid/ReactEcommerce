import React from 'react';
import styled from 'styled-components';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../context/filterContext';

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();
  return (
    <Wrapper>
      <div className="sorting-list--grid">
        <button
          className={grid_view ? 'active sort-btn' : 'sort-btn'}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={!grid_view ? 'active sort-btn' : ' sort-btn'}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>
      {/* total products */}
      <div className="product-data">
        <h3>{`${filter_products.length} Product Available`}</h3>
      </div>

      {/* sorting deopdown */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={sorting}
          >
            <option value="lowest">Price (Lowest)</option>
            <option value="highest">Price (Highest)</option>
            <option value="a-z">Alphabatically (a-z)</option>
            <option value="z-a">Alphabatically (z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;
  border: 1px solid rgb(170 170 170/40%);

  .sort-btn {
    margin: 1rem;
    border: none;
    background-color: none;
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
  }

  .icon {
    font-weight: bold;
  }

  .active {
    background-color: black;
    color: white;
  }
`;

export default Sort;
