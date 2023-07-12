import styled from 'styled-components';
import logo from '../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';


const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #070707;
  height: 130px;
  padding: 0 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
`;

const Logo = styled.img`
  height: 130px;
  
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const Navbar = styled.nav`
  display: flex;
  margin-left: auto;
  

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    transition: all 0.3s ease;
    height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
    overflow: hidden;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  }
`;

const NavItem = styled.a`
  color: #f7f6f6;
  text-decoration: none;
  margin-left: 20px;
  margin-right: 8px;
  margin-top: 15px;
  font-size: 18px;

  @media (max-width: 768px) {
    margin: 10px 0;
    display: block;
  }
`;

const ContactButton = styled.a`
  background-color: #f44336;
  color: #fff;
  border: none;
  text-decoration: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 18px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
    display: block;
  }
`;

const MenuButton = styled.button`
  display: none;
  background-color: #f6f6fa59;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 30px;
  color: #f6f6fa;
  transition: all 0.3s ease;
  margin-top: 30px;
  background-size: 25px 25px;
  background-repeat: no-repeat;
  background-position: center;

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuButtonClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo da empresa" />
      <Navbar isOpen={isOpen}>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/sobre">Sobre</NavItem>
        <ContactButton
            href="https://api.whatsapp.com/send?phone=5511980660741&text=Ol%C3%A1,%20eu%20gostaria%20de%20um%20or%C3%A7amento"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contato
        </ContactButton>
      </Navbar>
      <MenuButton onClick={handleMenuButtonClick}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuButton>
    </HeaderContainer>
  );
}

export default Header;
