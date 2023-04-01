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
        <SocialIconLink href="#" target="_blank">
          <FaFacebookF />
        </SocialIconLink>
        <SocialIconLink href="#">
          <FaGithub />
        </SocialIconLink>
        <SocialIconLink href="#" target="_blank">
          <FaInstagram />
        </SocialIconLink>
      </SocialIconsContainer>
      <h2>Ligue: (11)98066-0741</h2>
      <RightsReserved>&copy; 2023 CompactCode Brasil / Todos os direitos reservados.</RightsReserved>
    </FooterContainer>
  );
};

export default Footer;
