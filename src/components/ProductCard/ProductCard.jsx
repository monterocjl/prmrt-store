import {
  CardContainer,
  ImageContainer,
  InfoContainer,
  Title,
  Price,
  Image,
} from "./StyledComponents";

export const ProductCard = ({ product }) => {
  const { title, price, image } = product;
  return (
    <CardContainer to='/product' state={{ product }}>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <InfoContainer>
        <Title>{title}</Title>
        <Price>S/. {price}</Price>
      </InfoContainer>
    </CardContainer>
  );
};
