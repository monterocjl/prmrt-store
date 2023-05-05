import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 46%;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 25px;
    width: 100%;
  }
`;

const Title = styled.h2`
  margin: 0px;
  font-size: 35px;
  line-height: 42px;
  @media (max-width: 768px) {
    margin: 0px;
    font-size: 22px;
    line-height: 27px;
  }
`;

const Price = styled.p`
  margin: 12px 0px;
  font-weight: 700;
  font-size: 45px;
  @media (max-width: 768px) {
    font-size: 30px;
    margin: 10px 0px;
  }
`;

const Subtitle = styled.h2`
  margin: 0px;
  font-weight: 600;
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: 600;
  }
`;

const Description = styled.p`
  margin: 0px 40px 20px 0px;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
    margin: 0px 0px 20px 0px;
    line-height: 21px;
  }
`;

const Button = styled.button`
  width: fit-content;
  font-weight: 600;
  background: #4da2c2;
  color: white;
  border-radius: 7px;
  border: none;
  padding: 12px 30px;
  font-size: 20px;
  cursor: pointer;
  :disabled {
    background: #b8b8b8;
    color: #f6f6f6;
    cursor: not-allowed;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 0px;
    font-size: 18px;
  }
`;

export { Container, Title, Price, Description, Subtitle, Button };
