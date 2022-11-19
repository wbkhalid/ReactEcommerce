import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import CartItem from '../components/CartItem';
import { useCartContext } from '../context/cartContext';
import { Button } from '../components/Button';

const Cart = () => {
  const { cart, clearCart } = useCartContext();
  if (cart.length === 0) {
    return (
      <EmptyCart>
        <h3> no item in cart</h3>
        <NavLink to="/products">
            <Button>continue shopping</Button>
          </NavLink>
      </EmptyCart>
    );
  }

  return (
    <Wrapper>
      <div className="container">
        <div className="cart-heading grid grid-five--column">
          <p>item</p>
          <p>price</p>
          <p>quantity</p>
          <p>subtotal</p>
          <p>remove</p>
        </div>
        <hr />

        <div className="cart-item">
          {cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />;
          })}
        </div>

        <hr />

        <div className="cart-two--button">
          <NavLink to="/products">
            <Button>continue shopping</Button>
          </NavLink>

          <Button className="clear-cart" onClick={clearCart}>
            clear cart
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height:60vh;

  h3{
    font-size: 7rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  
`

const Wrapper = styled.section`
  padding: 5rem 0;

  .cart-heading {
    text-transform: capitalize;
    text-align: center;
    padding: 1rem;
    align-items: center;
    p {
      font-weight: bold;
    }
  }

  hr {
    margin: 2rem 0;
  }

  .cart-item {
    margin: 1rem;
    color: #aaa5a5;

    p {
      font-weight: 200;
    }

    .cart-image--name {
      align-items: center;
      display: grid;
      gap: 1rem;
      grid-template-columns: 0.4fr 1fr;
      text-transform: capitalize;
      text-align: left;
      img {
        max-width: 5rem;
        height: 5rem;
        object-fit: contain;
        color: transparent;
      }
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      .color-style {
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 50%;
      }
    }
    .price {
      font-size: 2rem;
      font-size: 2rem;
      font-size: 2rem;
      font-size: 2rem;
    }

    .amount-toggle {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2.4rem;
      font-size: 1.4rem;
      button {
        border: none;
        background-color: #fff;

        cursor: pointer;
      }
      .amount-style {
        font-size: 2.4rem;
        color: ${({ theme }) => theme.colors.btn};
      }
    }

    .remove_icon {
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  .cart-two--button {
    display: flex;
    justify-content: space-between;

    .clear-cart {
      background-color: #fb3535;
    }
  }
`;
export default Cart;
