import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filterContext';
import { FaCheck } from 'react-icons/fa';

const FilterSection = () => {
  const {
    filters: { text, category, color },
    updateFilterValue,
    all_products,
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
    margin-bottom: 3rem;

    h3 {
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

  .filter-company {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 3;

    h3 {
      font-weight: 700;
    }
    select {
      text-transform: capitalize;
      margin-bottom: 18rem;
    }
  }

  .filter-colors {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 3;
    h3 {
      font-weight: 600;
    }
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
`;

export default FilterSection;
