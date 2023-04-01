import React from 'react';
import styled from 'styled-components';
import quemSomosImg from '../assets/quemSomos.jpg';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px - 60px); /* Altura da tela menos altura do header e do footer */
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  width: 80%;
  max-width: 400px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(62, 230, 11, 0.1);
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

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

function About() {
  return (
    <CardContainer>
      <Card>
        <Title>Sobre Nós</Title>
        <Image src={quemSomosImg} alt="Quem somos" />
        <Text>
          Eu sou um desenvolvedor web e ofereço soluções personalizadas e inovadoras para clientes em todo o mundo. Dedicado a fornecer serviços de alta qualidade e suporte excepcional aos nossos clientes.
          Mantenho um diálogo aberto e honesto com nossos clientes em cada etapa do projeto, comprometido em fornecer soluções de alta qualidade dentro do prazo e do orçamento acordados. Estou sempre evoluindo e aprimorando meus serviços para atender às necessidades do mercado em constante mudança. Como desenvolvedor web, estou comprometido em fornecer soluções de alta qualidade e garantir a satisfação dos meus clientes.
        </Text>
      </Card>
    </CardContainer>
  );
}

export default About;
