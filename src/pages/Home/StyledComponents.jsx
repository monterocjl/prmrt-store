import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const ContainerCategories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border-radius: 50px;
  border: none;
  padding: 7px 15px;
  background: #4da2c2;
  color: white;
`;

const ResetButton = styled.button`
  border: none;
  padding: 7px 0px;
  background: none;
  text-decoration: underline;
  color: #4da2c2;
`;

export { Container, Button, ResetButton, ContainerCategories };
