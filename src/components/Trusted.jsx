import React from 'react';
import styled from 'styled-components';

const Trusted = () => {
  return (
    <Wrapper>
      <div className="container">
        <h3>trusted by 1000+ companies</h3>
        <div className="brand-section--slider">
          <div className="slide">
            <img src="images/company1.png" alt="trusted-brands" />
          </div>

          <div className="slide">
            <img src="images/company2.png" alt="trusted-brands" />
          </div>

          <div className="slide">
            <img src="images/company3.png" alt="trusted-brands" />
          </div>

          <div className="slide">
            <img src="images/company4.png" alt="trusted-brands" />
          </div>

          <div className="slide">
            <img src="images/company5.png" alt="trusted-brands" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0rem;

  .container{

    width: 100%;
  

  h3 {
    font-weight: bold;
    font-size: 2.5rem;
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 5rem;
  }

  .brand-section--slider {
    display: flex;
    background-color: ${({ theme }) => theme.colors.bg};
    opacity: 0.8;
    padding: 4rem 4rem;
    border-radius: 2rem;
    align-items: center;
    justify-content: center;

    .slide {
      flex: 1;

      img {
        width: 12rem;
      }
    }
  }}
`;

export default Trusted;
