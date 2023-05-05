import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Content = styled.div`
  padding: 20px;
  margin-top: 15px;
  @media (max-width: 768px) {
    padding-bottom: 90px;
  }
`;

const Desktop = styled.div`
  display: none;
  @media (min-width: 769px) {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    padding: 0px 30px;
    justify-content: space-between;
    box-sizing: border-box;
  }
`;
const Mobile = styled.div`
  display: none;
  @media (max-width: 768px) {
    background: #f3f3f3;
    width: 100%;
    height: 65px;
    position: fixed;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
`;

const ButtonMenu = styled(Link)`
  background: white;
  padding: 4px 21px;
  border-radius: 5px;
  text-decoration: none;
  color: #272727;
`;

export { Container, Content, Desktop, Mobile, ButtonMenu };
