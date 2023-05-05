import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductsToList,
  filterByCategory,
  resetFilter,
} from "../../features/products/productsSlice";
import { getProducts } from "../../services/products";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import {
  Container,
  Button,
  ResetButton,
  ContainerCategories,
} from "./StyledComponents";
import { Layout } from "../../components/Layout/Layout";

export default function Home() {
  const dispatch = useDispatch();
  const { products, productsFilter, categories } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    getProducts()
      .then((products) => dispatch(addProductsToList(products)))
      .catch(console.log);
  }, []);

  function handleFilter(category) {
    dispatch(filterByCategory(category));
  }

  function handleResetFilter() {
    dispatch(resetFilter());
  }

  return (
    <Layout>
      <ContainerCategories>
        {categories?.map((category) => (
          <Button key={category} onClick={() => handleFilter(category)}>
            {category}
          </Button>
        ))}
        <ResetButton onClick={handleResetFilter}>Limpiar filtros</ResetButton>
      </ContainerCategories>
      <Container>
        {/* Mostrará los productos sin filtros o filtrados dependiendo de la existencia de datos en el array productsFilter*/}
        {productsFilter.length === 0
          ? products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          : productsFilter?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </Container>
    </Layout>
  );
}
