import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addProductsToList: (state, action) => {
      const products = action.payload;
      state.push(products);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductsToList } = productsSlice.actions;
export default productsSlice.reducer;
