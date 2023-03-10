import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../assets/banner1.jpg';
import Grid from '../components/Grid';


function Home() {
    return (
      <>
      <Container>
        <Title>Desenvolvimento Web</Title>
        <Subtitle>Transformamos suas ideias em soluções digitais</Subtitle>
        <a href="https://wa.link/mjsme1"target="_blank"><Button>Entre em contato</Button></a>
      </Container>
      <Grid/></>
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
  color: #1b07f7;
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
  color: #f78f07;
  text-align: center;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    margin-bottom: 8px;
  }
`;

const Button = styled.button`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #057410;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #022912;
  }
`;
  
  export default Home;