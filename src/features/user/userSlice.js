import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  username: "",
  email: "",
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //Para agregar los datos de usuario logueado recibidos por API y almacenar el token en Local Storage
    addUser: (state, action) => {
      const { name, username, email, token } = action.payload;

      localStorage.setItem("user_token_promart", token);

      state.email = email;
      state.name = name;
      state.username = username;
      state.token = token;
    },
  },
});

// Se exportan las funciones como acciones para poder usarlas desde cualquier componentes
export const { addUser, removeUser } = userSlice.actions;

//Se exporta el slice para agregarlo al Store y poder acceder a su estado desde cualquier componente
export default userSlice.reducer;
