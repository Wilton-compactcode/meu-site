// Importando as bibliotecas necessárias
import React from 'react';
import styled from 'styled-components';
import Image1 from '../assets/imagem1.jpg';
import Image2 from '../assets/imagem2.jpeg';
import Image3 from '../assets/imagem3.jpg';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  border: 1px solid #05b4fa;
  background-color: #05b4fa;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  width: 400px; 
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CardImage = styled.img`
  width: 100%; /* Ajustando a largura da imagem para ocupar 100% do card */
  border-radius: 4px; /* Adicionando borda arredondada à imagem */
  margin-bottom: 12px; /* Adicionando margem inferior para separar a imagem do título */
`;

// Componente funcional que renderiza os cards
const CardContainer = () => {
  return (
    <Container>
      {/* Card 1 */}
      <Card>
      <CardImage src={Image1} alt="Imagem 1" />
        <h2>Precisando de um site para sua empresa?</h2>
        <p>Que tal expandir a presença da sua empresa no mercado e alcançar um público ainda maior? 
           Criar um site é uma das maneiras mais eficazes de fazer isso! Com um site profissional,
            você pode mostrar os seus produtos e serviços, divulgar sua marca e conquistar novos clientes.</p>
      </Card>

      {/* Card 2 */}
      <Card>
      <CardImage src={Image2} alt="Imagem 2" />
        <h2>Stress ao criar seu site novo?</h2>
        <p>Não perca a oportunidade de ter uma presença digital forte e destacada.
           Entre em contato conosco e nós podemos ajudá-lo a criar um site personalizado 
           e eficiente para a sua empresa. Com a nossa expertise e habilidades, 
           podemos garantir que seu site seja responsivo,
            atraente e adaptado às necessidades da sua empresa. 
          Vamos criar algo incrível juntos!</p>
      </Card>

      {/* Card 3 */}
      <Card>
      <CardImage src={Image3} alt="Imagem 3" />
        <h2>Investimento</h2>
        <p>Benefícios para o seu negócio.
           Aqui estão algumas das vantagens mais significativas:
            Maior visibilidade: um site permite que sua empresa seja encontrada mais facilmente na internet,
            aumentando sua visibilidade e alcance.

            Aumento de credibilidade: um site bem projetado e bem estruturado passa uma imagem profissional 
            e confiável para os seus clientes, aumentando a credibilidade da sua empresa.</p>
      </Card>
    </Container>
  );
};

export default CardContainer;
