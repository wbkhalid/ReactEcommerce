import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filterContext';
import { FaCheck } from 'react-icons/fa';
import FormatPrice from '../helper/FormatPrice'
import {Button} from './Button'

const FilterSection = () => {
  const {
    filters: { text, category, company, color,price,minPrice,maxPrice, },
    updateFilterValue,
    all_products,
    clearFilters
  } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    if (property === 'colors') {
      newVal = newVal.flat();
    }
    return (newVal = ['all', ...new Set(newVal)]);
  };

  const categoryData = getUniqueData(all_products, 'category');
  const companyData = getUniqueData(all_products, 'company');
  const colorsData = getUniqueData(all_products, 'colors');

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

      <div className="filter-company">
        <h3>Company</h3>

        <form action="#">
          <select
            name="company"
            id="company"
            className="filter-company--select"
            onClick={updateFilterValue}
           
          >
            {companyData.map((curElem, index) => {
              return (
                <option
                  key={index}
                  name="company"
                  value={curElem}
                  className="filter-company--option"
                >
                  {curElem}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <div className="filter-colors colors">
        <h3>Colors</h3>
        <div className="filter-color--style">
          {colorsData.map((curColor, index) => {
            if (curColor === 'all') {
              return (
                <button
                  key={index}
                  type="button"
                  value={curColor}
                  name="color"
                  className="color-all--style"
                  onClick={updateFilterValue}
                >
                  all
                </button>
              );
            }
            return (
              <button
                key={index}
                type="button"
                value={curColor}
                name="color"
                style={{ backgroundColor: curColor }}
                className={color === curColor ? 'btnStyle active' : 'btnStyle'}
                onClick={updateFilterValue}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </div>
      </div>

      {/* filter Price */}

      <div className="filter-price">
        <h3>Price</h3>
        <p><FormatPrice price={price}/></p>
        <input type="range" min={minPrice} max={maxPrice} value={price} name='price' onChange={updateFilterValue} />
      </div>

      <div className="clear-filters">
        <Button onClick={clearFilters}>Clear Filters</Button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`

h3 {
      font-weight: 700;
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 1.5rem;
    }
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
    /* line-height: 3; */

    .filter-category--menu {
      border: none;
      background-color: transparent;
      text-transform: capitalize;
      line-height: 1.7;
      cursor: pointer;
    }
  }

  .filter-company {
    display: flex;
    flex-direction: column;
    align-items: center;

    select {
      text-transform: capitalize;
      cursor: pointer;

    }
  }

  .filter-colors {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  .filter-color--style {
    display: flex;
    justify-content: center;
  }
  .color-all--style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }

  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  .checkStyle{
    color: #fff;
    font-size: 1.5rem;
  }
  .active {
    opacity: 1;
  }

  .filter-price{
    display: flex;
    align-items: center;
    flex-direction: column;
    

    input{
      cursor: pointer;
      margin-top: 2rem;

    }
  }

  .clear-filters{
    text-align: center;
    margin-top: 2rem;
  }
`;

export default FilterSection;
