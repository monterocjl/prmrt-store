import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    //Para agregar un producto al carrito de compras, primero agregamos el valor 'quantity' al objeto product
    addProductToCart: (state, action) => {
      const product = action.payload;

      state.cart.push({
        ...product,
        quantity: 1,
      });
    },

    //Para incrementar la cantidad de un producto en específico
    incrementQuantity(state, action) {
      const id = action.payload;
      const product = state.cart.find((product) => product.id === id);

      if (product) {
        product.quantity += 1;
      }
    },

    //Para decrementar la cantidad de un producto en específico
    decrementQuantity(state, action) {
      const id = action.payload;
      const product = state.cart.find((product) => product.id === id);

      if (product) {
        product.quantity -= 1;
      }
    },

    //Para eliminar un producto del carrito de compras
    removeProduct(state, action) {
      const id = action.payload;

      const filtered = state.cart.filter((producto) => producto.id !== id);
      state.cart = [...filtered];
    },
  },
});

// Se exportan las funciones como acciones para poder usarlas desde cualquier componentes
export const {
  addProductToCart,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
} = cartSlice.actions;

//Se exporta el Slice para agregarlo al Store y poder acceder a su estado desde cualquier componente
export default cartSlice.reducer;
