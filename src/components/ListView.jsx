import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import FormatPrice from '../helper/FormatPrice';
import { Button } from './Button';

const ListView = ({ products }) => {
  return (
    <Wrapper>
      <div className="container grid">
        {products.map((curElem) => {
          const { id, name, price, image, description } = curElem;
          return (
            <div className="card grid grid-two--column">
              <NavLink to={`/singleproduct/${id}`}>
                <figure>
                  <img src={image} alt={name} />
                </figure>
              </NavLink>

              <div className="card-data">
                <NavLink to={`/singleproduct/${id}`}>
                  <h3>{name}</h3>
                </NavLink>
                <p>
                  <FormatPrice price={price} />
                </p>
                <p>{description.slice(0, 90)}...</p>
                <NavLink to={`/singleproduct/${id}`}>
                  <Button>Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0rem;

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0%;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.1);
      cursor: pointer;
    }

    img {
      max-width: 90rem;
      height: 20rem;
      margin-top: 1rem;
    }
  }

  .card {
    border: 0.1rem solid rgb(170 170 170/40%);

    .card-data {
      padding: 1rem 1rem;
    }
    h3 {
      margin: 2rem 0;
      font-weight: 500;
      font-size: 2.4rem;
      text-transform: capitalize;
      color: black;
    }
  }
`;
export default ListView;
