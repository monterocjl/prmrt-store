import { useSelector } from "react-redux";
import { Layout } from "../../components/Layout/Layout";
import { ProductInCartCard } from "../../components/ProductInCartCard/ProductInCartCard";
import { Container, EmptyCart } from "./StyledComponents";
import { TotalCart } from "../../components/TotalCart/TotalCart";
import { useEffect, useState } from "react";

export default function Cart() {
  const { cart } = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const precioTotal = cart.reduce(
      (acumulador, producto) => acumulador + producto.price * producto.quantity,
      0
    );
    setTotal(precioTotal.toFixed(2));
  }, [cart]);

  return (
    <Layout>
      {cart.length === 0 ? (
        <EmptyCart>No hay productos en el carrito</EmptyCart>
      ) : (
        <>
          <Container>
            {cart.map((product) => (
              <ProductInCartCard key={product.id} product={product} />
            ))}
          </Container>
          <TotalCart totalPrice={total} />
        </>
      )}
    </Layout>
  );
}
