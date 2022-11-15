import styled from 'styled-components';
import FilterSection from '../components/FilterSection';
import ProductList from '../components/ProductList';
import Sort from '../components/Sort';

const Products = () => {

  return (
    <Wrapper>
      <div className="container grid grid-filter--section">
        <div className='FilterSection'>
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
padding: 5rem 0rem;
.grid-filter--section{
  grid-template-columns: 1.5fr 8.5fr;
 
  grid-gap: 2rem;
  }
`;

export default Products;
