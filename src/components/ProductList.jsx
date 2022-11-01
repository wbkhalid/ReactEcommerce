import styled from 'styled-components';
import { useFilterContext } from '../context/filterContext';
import GridView from './GridView';

const ProductList = () => {
  const { filter_products, setGridView } = useFilterContext();
  return (
    <Wrapper>
      if (setGridView) {<GridView products={filter_products} />}
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default ProductList;
