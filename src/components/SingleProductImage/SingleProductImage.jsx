import { Container, Image, ArrowBack } from "./StyledComponents";
import { BsArrowLeftShort } from "react-icons/bs";

export const SingleProductImage = ({ image }) => {
  return (
    <Container>
      <Image src={image} alt='product-image' />
      <ArrowBack to='/'>
        <BsArrowLeftShort />
      </ArrowBack>
    </Container>
  );
};
