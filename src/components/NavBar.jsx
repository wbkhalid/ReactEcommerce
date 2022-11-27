import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';
import { useCartContext } from '../context/cartContext';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from './Button';

const NavBar = () => {
  const { total_item } = useCartContext();
  const [menuIcon, setMenuIcon] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated,user } = useAuth0();
  return (
    <Nav>
      <div className={menuIcon ? 'navbar active' : 'navbar'}>
        <ul className="navbar-lists">
          <li>
            <NavLink
              to="/"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="navbar-link"
              onClick={() => setMenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>

      {isAuthenticated && <p>{user.name}</p>}
        

          {isAuthenticated ? (
            <li >
              <Button className='inout'
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </Button>
            </li>
          ) : (
            <li >
              <Button className='inout'
               onClick={() => loginWithRedirect()}>Log In</Button>;
            </li>
          )}

          <li>
            <NavLink
              to="/cart"
              className="navbar-link cart-trolley--link"
              onClick={() => setMenuIcon(false)}
            >
              <AiOutlineShoppingCart className="cart-trolley" />
              <span className="cart-trolley--item">{total_item}</span>
            </NavLink>
          </li>
        </ul>

        {/* Two buttons for open and close navabr */}

        <div className="mobile-navbar--btn">
          <AiOutlineMenu
            name="menu-outline"
            className="mobile-navbar--icon"
            onClick={() => setMenuIcon(true)}
          />
          <AiOutlineClose
            name="close-outline"
            className="mobile-navbar--icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  .navbar-lists {
    display: flex;
    gap: 4rem;
    align-items: center;
    justify-content: center;

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.black};
        transition: all 0.3s linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
    .inout{
  padding: 4px 10px;
  margin-bottom: 1.5rem;
  border-radius: 2rem;
  
}
  }

  

  .mobile-navbar--btn {
    display: none;
    background-color: transparent;
    cursor: pointer;
    border: none;
  }

  .mobile-navbar--icon[name='close-outline'] {
    display: none;
  }

  .close-outline {
    display: none;
  }

  .cart-trolley--link {
    position: relative;
    .cart-trolley {
      position: relative;
      font-size: 2.4rem;
    }

    .cart-trolley--item {
      font-size: 1.1rem;
      width: 1.7rem;
      height: 1.7rem;
      position: absolute;
      color: #000;
      border-radius: 50%;
      display: grid;
      align-items: center;
      justify-content: center;
      top: -30%;
      left: 60%;
      background-color: ${({ theme }) => theme.colors.cart_bg};
    }
  }

  




  /* Media Queries */

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar--btn {
      display: inline-block;
      z-index: 9999;

      .mobile-navbar--icon {
        font-size: 3rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }

    .active .mobile-navbar--icon {
      display: none;
      font-size: 3rem;
      position: absolute;
      top: 10%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }

    .active .close-outline {
      display: inline-block;
    }

    .navbar-lists {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      visibility: hidden;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s linear;
    }

    .active .navbar-lists {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      transition: all 0.3s linear;
    }
    .navbar-link {
      font-size: 10rem;
    }
  }
`;

export default NavBar;
