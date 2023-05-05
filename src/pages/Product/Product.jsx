import { useLocation } from "react-router-dom";
import { SingleProductImage } from "../../components/SingleProductImage/SingleProductImage";
import { SingleProductContent } from "../../components/SingleProductContent/SingleProductContent";
import { Container } from "./StyledComponents";
import { Layout } from "../../components/Layout/Layout";

export default function Product() {
  // Para poder recibir Props a través de React Router Dom
  const location = useLocation();
  const { product } = location.state;

  return (
    <Layout>
      <Container>
        <SingleProductImage image={product.image} />
        <SingleProductContent product={product} />
      </Container>
    </Layout>
  );
}
