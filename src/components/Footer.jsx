import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DevLink = styled.a`
  margin: 0 10px;
  color: #0974ee;
  text-decoration: none;
  font-size: 24px;

  &:hover {
    color: #00ff9d;
  }
`;

const SocialIconLink = styled.a`
  color: #fff;
  font-size: 20px;
  margin: 0 10px;
`;

const RightsReserved = styled.p`
  margin-top: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIconsContainer>
        <SocialIconLink href="https://www.facebook.com/profile.php?id=61551086261029" target="_blank">
          <FaFacebookF />
        </SocialIconLink>
        <SocialIconLink href="https://github.com/Wilton-compactcode">
          <FaGithub />
        </SocialIconLink>
        <SocialIconLink href="https://www.instagram.com/wiltongoncalves.dev/" target="_blank">
          <FaInstagram />
        </SocialIconLink>
      </SocialIconsContainer>
      <h2>Ligue: (11)94144-4178</h2>
      <RightsReserved>Todos os direitos reservados &copy; 2023 <DevLink href='https://compactcodebrasil.com.br/' target="_blank">CompactCode Brasil</DevLink></RightsReserved>
    </FooterContainer>
  );
};

export default Footer;
