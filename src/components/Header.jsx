import React from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const HeaderContainer = styled.header`
  background-color: #292828;
  color: #fff;
  padding: 10px;
  text-align: center;
`;

const Logo = styled.img`
  max-width: 50%;
  height: auto;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      
    </HeaderContainer>
  );
};

export default Header;
