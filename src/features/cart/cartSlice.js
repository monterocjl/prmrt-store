import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;

      const finalProduct = {
        ...product,
        quantity: 1,
      };
      state.push(finalProduct);
    },

    incrementQuantity(state, action) {
      const id = action.payload;
      const producto = state.find((producto) => producto.id === id);

      if (producto) {
        producto.quantity += 1;
      }
    },

    decrementQuantity(state, action) {
      const id = action.payload;
      const producto = state.find((producto) => producto.id === id);

      if (producto) {
        producto.quantity -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductToCart, incrementQuantity, decrementQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
