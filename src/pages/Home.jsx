import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../assets/banner1.jpg';
import Cards from '../components/CardContainer';
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton';


function Home() {
  const openWhatsAppButton = () => {
    // Adicione aqui a lógica para abrir o link do WhatsApp
   window.open('https://wa.me/5511941444178?text=Ol%C3%A1%2C+Vi+seu+numero+seu+site+e+quero+um+or%C3%A7amento.', '_blank');
  };
    return (
      <>
      <Container>
        <Title>Desenvolvimento Web</Title>
        <Subtitle>Transformamos suas ideias em soluções digitais</Subtitle>
        <Button onClick={openWhatsAppButton}>Entre em contato</Button>
      </Container>
      <Cards/>
      <FloatingWhatsAppButton/>
      </>
      
    );
  }

  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
  
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #0783f7;
  text-align: center;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    margin-right: 5px;
    margin-bottom: 8px;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #0777f7;
  text-align: center;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    margin-bottom: 8px;
  }
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #0ae766;
  color: #2a07ee;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #022912;
  color: #f3f2f7;

  }
`;
  
  export default Home;