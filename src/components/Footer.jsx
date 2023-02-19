import React from 'react';
import styled from 'styled-components';


function Footer() {
    return (
      <FooterContainer>
        <FooterText>© 2023 CompactCode Brasil. Todos os direitos reservados.</FooterText>
      </FooterContainer>
    );
  }

  const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4e2504;
  color: #fff;
  height: 80px;
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-right: 5px;
    margin-bottom: 8px;
    text-align: center;
  }
`;

const FooterText = styled.p`
  font-size: 16px;
  font-weight: bold;
`;
  
  export default Footer;