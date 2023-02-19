import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #e6ed89;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
`;
const Telefone = styled.h1`
  font-size: 2rem;
  color: red;
  text-align: center;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

const Label = styled.label`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  font-size: 1.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const Textarea = styled.textarea`
  font-size: 1.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #bd680d;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #555;
  }
`;

function Contact() {
  return (
    <Container>
      <Title>Entre em Contato</Title>
      <Telefone>(11)98066-0741</Telefone>
      <Form action="https://formsubmit.co/compactcodebrasil@gmail.com"target="_blank"
        method="POST">
        <Label htmlFor="name">Nome:</Label>
        <Input type="text" id="name" name="name" />
        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" />
        <Label htmlFor="message">Mensagem:</Label>
        <Textarea id="message" name="message" rows="5" />
        <Button type='submit'>Enviar</Button>
        </Form>
    </Container>
  );
}

export default Contact;
