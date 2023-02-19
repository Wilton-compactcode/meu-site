import React from 'react';
import styled from 'styled-components';
import Image1 from '../assets/imagem1.jpg';
import Image2 from '../assets/imagem2.jpeg';
import Image3 from '../assets/imagem3.jpg';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 5%;
  margin-top: 5px;
  margin-right: 5%;
  padding:0;
  gap: 16px;
  @media (max-width: 768px) {
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border: #f4eea6 solid 5px;
`;

const Subtitle = styled.h3`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 8px;
  margin: 0;
  font-size: 16px;
`;

const Paragraph = styled.p`
  position: relative;
  bottom: 0;
  left: 0;
  color: #f6f6f8;
  padding: 8px;
  margin: 0;
  font-size: 16px;
`;

const Grid = () => {
    return (
      <GridContainer>
        <ImageWrapper>
          <Image src={Image1} alt="Imagem 1" />
          <Subtitle>Precisando de um site para sua empresa? </Subtitle>
          <Paragraph>
           Que tal expandir a presença da sua empresa no mercado e alcançar um público ainda maior? 
           Criar um site é uma das maneiras mais eficazes de fazer isso! Com um site profissional,
            você pode mostrar os seus produtos e serviços, divulgar sua marca e conquistar novos clientes.
          </Paragraph>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={Image2} alt="Imagem 2" />
          <Subtitle>Stress ao criar seu site novo?</Subtitle>
          <Paragraph>
          Não perca a oportunidade de ter uma presença digital forte e destacada.
           Entre em contato conosco e nós podemos ajudá-lo a criar um site personalizado 
           e eficiente para a sua empresa. Com a nossa expertise e habilidades, 
           podemos garantir que seu site seja responsivo,
            atraente e adaptado às necessidades da sua empresa. 
          Vamos criar algo incrível juntos!
          </Paragraph>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={Image3} alt="Imagem 3" />
          <Subtitle>Investimento</Subtitle>
          <Paragraph>
          Benefícios para o seu negócio.
           Aqui estão algumas das vantagens mais significativas:
            Maior visibilidade: um site permite que sua empresa seja encontrada mais facilmente na internet,
            aumentando sua visibilidade e alcance.

            Aumento de credibilidade: um site bem projetado e bem estruturado passa uma imagem profissional 
            e confiável para os seus clientes, aumentando a credibilidade da sua empresa.
          </Paragraph>
        </ImageWrapper>
      </GridContainer>
    );
  };
  
  export default Grid;
