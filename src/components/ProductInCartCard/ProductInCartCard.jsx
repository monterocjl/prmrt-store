import {
  CardContainer,
  ImageContainer,
  InfoContainer,
  Title,
  Price,
  Image,
  QuantityContainer,
  Button,
  Quantity,
} from "./StyledComponents";
import { useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
} from "../../features/cart/cartSlice";

export const ProductInCartCard = ({ product }) => {
  const dispatch = useDispatch();
  const { image, title, price, quantity } = product;

  function handleQuantity(value) {
    switch (value) {
      case "+":
        dispatch(incrementQuantity(product.id));
        break;
      case "-":
        dispatch(decrementQuantity(product.id));
        break;
    }
  }

  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <Price>S/. {price}</Price>
      </InfoContainer>
      <QuantityContainer>
        <Button disabled={quantity === 1} onClick={() => handleQuantity("-")}>
          -
        </Button>
        <Quantity>{quantity}</Quantity>
        <Button onClick={() => handleQuantity("+")}>+</Button>
      </QuantityContainer>
    </CardContainer>
  );
};
