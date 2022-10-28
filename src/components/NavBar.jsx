import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';

const NavBar = () => {
  const [menuIcon, setMenuIcon] = useState(false)
  return (
    <Nav>
      <div className={menuIcon ? "navbar active": "navbar"}>
        <ul className="navbar-lists">
          <li>
            <NavLink to="/" className="navbar-link" onClick={()=>setMenuIcon(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="navbar-link" onClick={()=>setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="navbar-link" onClick={()=>setMenuIcon(false)}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="navbar-link" onClick={()=>setMenuIcon(false)}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="navbar-link cart-trolley--link" onClick={()=>setMenuIcon(false)}>
              <AiOutlineShoppingCart className="cart-trolley" />
              <span className="cart-trolley--item">10</span>
            </NavLink>
          </li>
        </ul>

        {/* Two buttons for open and close navabr */}

        <div className="mobile-navbar--btn">
          <AiOutlineMenu name="menu-outline" className="mobile-navbar--icon" onClick={()=>setMenuIcon(true)} />
          <AiOutlineClose
            name="close-outline"
            className="mobile-navbar--icon close-outline"
            onClick={()=>setMenuIcon(false)}
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

    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        font-size: 1.8rem;
        font-weight: 500;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: all 0.3s linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
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
      transition: all .3s linear;

    }

    .active .navbar-lists{
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      transition: all .3s linear;

    }
    .navbar-link{
      font-size: 10rem;
    }
  }
`;

export default NavBar;
