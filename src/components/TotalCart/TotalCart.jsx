import {
  Container,
  Content,
  Text,
  TotalPrice,
  Button,
} from "./StyledComponents";

export const TotalCart = ({ totalPrice }) => {
  return (
    <Container>
      <Content>
        <Text>Total</Text>
        <TotalPrice>S/. {totalPrice}</TotalPrice>
      </Content>
      <Button>Finalizar compra</Button>
    </Container>
  );
};
