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

  @media (max-width: 768px) {
    margin-bottom: 77px;
  }
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

export { Container, Text, TotalPrice };
