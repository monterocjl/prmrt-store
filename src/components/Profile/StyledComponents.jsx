import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 150px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled.button`
  width: fit-content;
  margin-top: 13px;
  font-weight: 500;
  background: #4da2c2;
  height: 30px;
  color: white;
  border-radius: 5px;
  border: none;
  padding: 19px 10px;
  font-size: 17px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.p`
  margin: 0;
  font-size: 18px;
`;

export { Container, Text, Button };
