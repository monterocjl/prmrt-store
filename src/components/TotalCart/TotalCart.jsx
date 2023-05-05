import { Container, Text, TotalPrice } from "./StyledComponents";

export const TotalCart = ({ totalPrice }) => {
  return (
    <Container>
      <Text>Total</Text>
      <TotalPrice>{totalPrice}</TotalPrice>
    </Container>
  );
};
