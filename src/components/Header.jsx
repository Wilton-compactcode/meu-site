import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';


const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #04162b;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  height: 100px;
`;

const Nav = styled.nav`
  display: flex;

  @media screen and (max-width: 768px) {
    margin-top: 16px;
  }
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 16px;

  @media screen and (max-width: 768px) {
    margin-right: 5px;
    margin-bottom: 8px;
  }
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo src={logo} alt="Logo" />
      <Nav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/Sobre">Sobre</NavLink>
        <NavLink href="/Contato">Contato</NavLink>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;