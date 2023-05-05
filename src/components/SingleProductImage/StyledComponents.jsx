import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: contain;
  @media (max-width: 768px) {
    width: 100%;
    height: 320px;
  }
`;

export { Container, Image };
