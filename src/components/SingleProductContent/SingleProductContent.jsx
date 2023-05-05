import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../features/cart/cartSlice";
import {
  Container,
  Description,
  Price,
  Title,
  Subtitle,
  Button,
} from "./StyledComponents";

export const SingleProductContent = ({ product }) => {
  const dispatch = useDispatch();
  const { title, price, description } = product;
  const [disable, setDisable] = useState(false);
  const [textButton, setTextButton] = useState("Agregar al carrito");

  function addToCart() {
    dispatch(addProductToCart(product));
    setDisable(true);
    setTextButton("Agregado al carrito");
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Price>S/. {price}</Price>
      <Subtitle>Descripción:</Subtitle>
      <Description>{description}</Description>
      <Button disabled={disable} onClick={addToCart}>
        {textButton}
      </Button>
    </Container>
  );
};
