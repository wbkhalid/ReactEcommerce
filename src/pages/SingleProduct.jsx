import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageNavigation from '../components/PageNavigation';
import ProductImage from '../components/ProductImage';
import { useProductContext } from '../context/productcontext';
import FormatPrice from '../helper/FormatPrice';
import { MdSecurity } from 'react-icons/md';
import { TbTruckDelivery, TbReplace } from 'react-icons/tb';
import Star from '../components/Star';

const SingleProduct = () => {
  const API = 'https://api.pujakaitem.com/api/products';
  const { id } = useParams();
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    image,
    stars,
    reviews,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);
  if (isSingleLoading) {
    return <h2 className="page_loading">Loading...</h2>;
  }
  return (
    <Wrapper>
      <PageNavigation name={name} />
      <div className="container">
        <div className="grid grid-two--column">
          <div className="product-image">
            <ProductImage img={image} />
          </div>
          <div className="product-data">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews}/>
            
            <p className="product-data-price">
              MRP:
              <del>
                <span>
                  <FormatPrice price={price + 100000} />
                </span>
              </del>
            </p>
            <p className="product-data-price product-data--real---price">
              Deal of the Day:
              <span>
                <FormatPrice price={price} />
              </span>
            </p>
            <p>{description}</p>

            <div className="product-data--warranty">
              <div className="product-warranty--data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty--data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty--data">
                <TbTruckDelivery className="warranty-icon" />
                <p>WBK Delivered </p>
              </div>

              <div className="product-warranty--data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty </p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? 'In Stock' : 'Not Available'}</span>
              </p>
              <p>
                ID : <span> {id} </span>
              </p>
              <p className='brand'>
                Brand :<span> {company} </span>
              </p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 5rem;
    
  }
  .grid {
    padding: 1rem;
  }

  .product-image{
    display: flex;
    align-items: center;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;

    .product-data--warranty {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 1rem;
      .product-warranty--data {
        text-align: center;
        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }
    / .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;
    }
    .brand{
      text-transform: capitalize;
    }
    hr {
      max-width: 100%;
      width: 90%;
      border: 0.1rem solid #000;
      color: red;
    }
    span {
      font-weight: bold;
    }
  }
  
  .page_loading {
    font-size: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default SingleProduct;
