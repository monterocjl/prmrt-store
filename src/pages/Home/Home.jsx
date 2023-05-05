import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addProductsToList } from "../../features/products/productsSlice";
import { getProducts } from "../../services/products";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Container } from "./StyledComponents";
import { Layout } from "../../components/Layout/Layout";

export default function Home() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products[0]);

  useEffect(() => {
    getProducts()
      .then((products) => dispatch(addProductsToList(products)))
      .catch(console.log);
  }, []);

  return (
    <Layout>
      <Container>
        {productsList?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Container>
    </Layout>
  );
}
