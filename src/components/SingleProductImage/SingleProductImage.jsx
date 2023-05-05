import { Container, Image } from "./StyledComponents";

export const SingleProductImage = ({ image }) => {
  return (
    <Container>
      <Image src={image} alt='product-image' />
    </Container>
  );
};
