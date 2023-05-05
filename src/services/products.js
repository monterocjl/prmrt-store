//Este servicio realiza una petición a una API para obtener un listado de productos
async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export { getProducts };
