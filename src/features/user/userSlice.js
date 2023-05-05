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
    addUser: (state, action) => {
      const { name, username, email, token } = action.payload;

      localStorage.setItem("user_token_promart", token);

      state.email = email;
      state.name = name;
      state.username = username;
      state.token = token;
    },

    removeUser: (state, action) => {
      console.log("Logout");
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
