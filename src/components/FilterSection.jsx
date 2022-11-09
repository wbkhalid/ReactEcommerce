import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filterContext';

const FilterSection = () => {
  const {
    filters: { text, category },
    updateFilterValue,
    all_products,
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    return (newVal = ['All', ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, 'category');
  return (
    <Wrapper>
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
          />
        </form>
      </div>

      <div className="filter-category">
        <h3>Categories</h3>
        {categoryData.map((curElem, index) => {
          return (
            <button
              className="filter-category--menu"
              key={index}
              type="button"
              name="category"
              value={curElem}
              onClick={updateFilterValue}
            >
              {curElem}
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .filter-search {
    padding: 2rem 3rem;

    input {
      text-transform: lowercase;
    }
  }

  .filter-category {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 3;

    h3{
      font-weight: 700;
    }

    .filter-category--menu {
      border: none;
      background-color: transparent;
      text-transform: capitalize;
      line-height: 1.7;
      cursor: pointer;

     
    }
  }
`;

export default FilterSection;
