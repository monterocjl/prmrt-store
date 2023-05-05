import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 61px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 5px;
`;

const Text = styled.p`
  margin: 0px;
  font-size: 22px;
`;

const TotalPrice = styled.p`
  margin: 0px;
  font-weight: 700;
  font-size: 22px;
`;

const Button = styled.button`
  width: 100%;
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

export { Container, Content, Text, TotalPrice, Button };
