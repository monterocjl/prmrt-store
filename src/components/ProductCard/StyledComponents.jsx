import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled(Link)`
  width: 218px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #efefef;
  text-decoration: none;
  @media (max-width: 768px) {
    width: 168px;
  }
`;

const ImageContainer = styled.div`
  width: 161px;
  height: 218px;
  padding: 26px;
  flex: 1;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: 190px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  background: #efefef;
  width: 100%;
  height: auto;
  border-radius: 0px 0px 10px 10px;
  padding: 10px;
  box-sizing: border-box;
`;

const Title = styled.h3`
  margin: 0px 0px 3px 0px;
  font-size: 15px;
  font-weight: 400;
  color: #717171;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 95%;
`;

const Price = styled.p`
  margin: 0px;
  font-size: 18px;
  font-weight: 700;
  color: #272727;
`;

export { CardContainer, ImageContainer, Image, InfoContainer, Title, Price };
