import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  height: 121px;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #efefef;
  position: relative;
`;

const ImageContainer = styled.div`
  min-width: 100px;
  width: 100px;
  height: 100%;
  padding: 26px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  width: calc(100% - 100px);
  height: auto;
  border-radius: 0px 0px 10px 10px;
  padding: 10px 0px;
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

const QuantityContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 9px;
  right: 9px;
  background: #f2f2f2;
  gap: 10px;
  border-radius: 5px;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  width: 25px;
  background: none;
  height: 27px;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
  }
`;

const Quantity = styled.p`
  margin: 0px;
`;

const DeleteProduct = styled.div`
  background: #f2f2f2;
  display: flex;
  position: absolute;
  top: 9px;
  right: 9px;
  gap: 10px;
  border-radius: 5px;
  align-items: center;
  padding: 5px;
`;

export {
  CardContainer,
  ImageContainer,
  Image,
  InfoContainer,
  Title,
  Price,
  QuantityContainer,
  Button,
  Quantity,
  DeleteProduct,
};
