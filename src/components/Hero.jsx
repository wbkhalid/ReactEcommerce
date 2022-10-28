import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const Hero = ({mydata}) => {
    const {name}= mydata
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two--column">
          <div className="hero-section--data">
            <p>Welcome to</p>
            <h1>{name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus pariatur reiciendis vel tempore dolorem necessitatibus
              esse doloremque consequatur fuga sint nostrum modi soluta nulla,
              vitae dolorum voluptate assumenda possimus libero!
            </p>
            <NavLink>
              <Button>Shop Now</Button>
            </NavLink>
          </div>

          <div className="hero-section--image">
            <figure>
              <img src="images/hero.jpg" alt="" className="img-style" />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 10rem 2rem;

  .hero-section--data {
    p {
      margin: 1rem 0rem;
    }

    h1 {
      text-transform: uppercase;
      font-weight: 700;
    }
  }

  .hero-section--image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figure {
    position: relative;

    &::after {
      content: '';
      width: 80%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 25%;
      top: -3rem;
      z-index: -1;
      opacity: .6;
      
    }
  }

  .img-style {
    width: 100%;
    height: auto;
  }
`;

export default Hero;
