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
  background-color: rgb(181, 228, 244);
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 600px;
  height: 900px;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #008cff;
`;

const Text = styled.p`
  font-size: 22px;
  line-height: 24px;
  color: #080808;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 16px;
  text-align: justify;
`;

const Image = styled.img`
  width: 95%;
  height: 70%;
  /* object-fit: cover; */
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  @media (max-width: 768px) {
    height: 30%;
  }
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
