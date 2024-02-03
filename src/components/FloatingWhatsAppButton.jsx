import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Container = styled.div`
  position: fixed;
  bottom: 20%;
  right: 20px;
  background-color: #25d366; /* Cor do WhatsApp */
  color: #fff;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  transition: background-color 0.3s ease;
;
`;

const FloatingWhatsAppButton = () => {
    const openWhatsApp = () => {
        // Adicione aqui a lógica para abrir o link do WhatsApp
        window.open('https://wa.me/5511941444178?text=Ol%C3%A1%2C+Vi+seu+numero+seu+site+e+quero+um+or%C3%A7amento.', '_blank');
      };
  return (
    <Container onClick={openWhatsApp}>
        <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#fff' }} />
    </Container>
  );
};

export default FloatingWhatsAppButton;
