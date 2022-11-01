import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './NavBar';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img  src='images/logo.jpg' alt='Logo' className='logo'/>
      </NavLink>
      <NavBar/>
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 2rem 5rem;
  height: 8rem;
  background: ${({ theme }) => theme.colors.bg};
  display:flex;
  justify-content:space-between;
  align-items: center;
  pointer-events: relative;

  .logo{
    width: 15rem;
    height: 4rem;
  }

`;

export default Header;
