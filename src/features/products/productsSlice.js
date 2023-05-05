import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: ["men's clothing", "electronics", "jewelery", "women's clothing"],
  products: [],
  productsFilter: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    //Para agregar los productos de la API al listado de productos
    addProductsToList: (state, action) => {
      const products = action.payload;
      state.products = products;
    },

    //Para filtrar los productos por categoría
    filterByCategory: (state, action) => {
      const category = action.payload;

      const filtered = state.products.filter(
        (product) => product.category == category
      );

      state.productsFilter = filtered;
    },

    //Para resetear los productos filtrados
    resetFilter: (state, action) => {
      state.productsFilter = [];
    },
  },
});

// Se exportan las funciones como acciones para poder usarlas desde cualquier componentes
export const { addProductsToList, filterByCategory, resetFilter } =
  productsSlice.actions;

//Se exporta el slice para agregarlo al Store y poder acceder a su estado desde cualquier componente
export default productsSlice.reducer;
