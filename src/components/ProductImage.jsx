import React, { useState } from 'react';
import styled from 'styled-components';

const ProductImage = ({ img = [{ url: '' }] }) => {
  const [mainImage, setMainImage] = useState(img[0]);
  return (
    <Wrapper>
      <div className="grid">
        {img.map((curElem, index) => {
          return (
            <figure>
              <img
                src={curElem.url}
                alt={curElem.filename}
                key={index}
                onClick={() => setMainImage(curElem)}
              />
            </figure>
          );
        })}
      </div>

      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem;
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  border: 1px solid;

  .grid {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 100%;
    gap: 0.5rem;

    img {
      max-width: 100%;
      max-height: 100%;
      background-size: cover;
      object-fit: cover;
      cursor: pointer;
      box-shadow: ${({ theme }) => theme.colors.shadow};
      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .main-screen {
    display: grid;
    place-items: center;
    order: 1;
    img {
      width: 100%;
      height: 100%;
      box-shadow: ${({ theme }) => theme.colors.shadow};
      cursor: pointer;

      &:hover {
        transform: scale(1.04);
      }
    }
  }
`;

export default ProductImage;
