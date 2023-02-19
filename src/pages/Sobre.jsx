import React from 'react';
import styled from 'styled-components';
import background from '../assets/quemSomos.jpeg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;background-image: url(${background});
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #008cff;
`;

const Text = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: #008cff;
`;

function About() {
  return (
    <Container>
      <Title>Sobre Nós</Title>
      <Text>
        Somos uma equipe de desenvolvedores apaixonados por criar soluções digitais inovadoras.
      </Text>
    </Container>
  );
}

export default About;
