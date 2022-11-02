import React from 'react';
import styled from 'styled-components';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../context/filterContext';

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView } =
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

      <div className="product-data"><h3>{`${filter_products.length} Product Available`}</h3></div>
      <div className="sort-selection">Dropdown</div>
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

  

  .icon{
    font-weight: bold;
  }

  .active {
    background-color: black;
    color: white;
  }
`;

export default Sort;


