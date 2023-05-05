import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;

      const finalProduct = {
        ...product,
        quantity: 1,
      };
      state.cart.push(finalProduct);
    },

    incrementQuantity(state, action) {
      const id = action.payload;
      const producto = state.cart.find((producto) => producto.id === id);

      if (producto) {
        producto.quantity += 1;
      }
    },

    decrementQuantity(state, action) {
      const id = action.payload;
      const producto = state.cart.find((producto) => producto.id === id);

      if (producto) {
        producto.quantity -= 1;
      }
    },

    removeProduct(state, action) {
      const id = action.payload;

      const filtered = state.cart.filter((producto) => producto.id !== id);
      state.cart = [...filtered];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addProductToCart,
  incrementQuantity,
  decrementQuantity,
  removeProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
