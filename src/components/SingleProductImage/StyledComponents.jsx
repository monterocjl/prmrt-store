import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
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

const ArrowBack = styled(Link)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: -30px;
    left: -13px;
    font-size: 44px;
    color: black;
    position: absolute;
  }
`;

export { Container, Image, ArrowBack };
