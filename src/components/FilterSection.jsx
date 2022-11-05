import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filterContext';

const FilterSection = () => {
  const {
    filters: { text },
    updateFilterValue,
  } = useFilterContext();
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
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .filter-search {
    padding: 2rem 3rem;

    input{

      text-transform: lowercase;
    }
  }
`;

export default FilterSection;
