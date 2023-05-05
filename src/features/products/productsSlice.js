import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    categories: [
      "men's clothing",
      "electronics",
      "jewelery",
      "women's clothing",
    ],
    products: [],
    productsFilter: [],
  },
  reducers: {
    addProductsToList: (state, action) => {
      const products = action.payload;
      state.products = products;
    },

    filterByCategory: (state, action) => {
      const category = action.payload;

      const filtered = state.products.filter(
        (product) => product.category == category
      );

      state.productsFilter = filtered;
    },

    resetFilter: (state, action) => {
      state.productsFilter = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProductsToList, filterByCategory, resetFilter } =
  productsSlice.actions;
export default productsSlice.reducer;
