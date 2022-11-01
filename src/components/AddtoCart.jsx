import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import {Button} from './Button'

const AddtoCart = ({ product }) => {
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    stock > amount ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <Wrapper>
      <div className="colors">
        <p>
          Color:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? 'btnStyle active' : 'btnStyle'}
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? <FaCheck className="checkStyle" /> : null}
              </button>
            );
          })}
        </p>
      </div>

      <CartAmountToggle
        amount={amount}
        setIncrease={setIncrease}
        setDecrease={setDecrease}
      />

      <NavLink to={'/cart'}>
        <Button>Add to Cart</Button>
      </NavLink>
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .btnStyle {
      width: 2.5rem;
      height: 2.5rem;
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
    .active {
      opacity: 1;
    }
  }
  .checkStyle {
    color: white;
    font-size: 1rem;
  }
  
  .amount-toggle{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 2rem;

    .amount-style{

      font-size: 2.5rem;
      background-color: #aca9a9;
      padding: .2rem 1rem;
    }
    button{
      font-size: 2rem;
      background-color: #aca9a9;
      padding: .1rem .5rem;
      border: none;
    }
  }
`;
export default AddtoCart;
