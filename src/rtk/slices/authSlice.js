import { createSlice } from "@reduxjs/toolkit";

const adminUserSlice = createSlice({
  name: "adminUser",
  initialState: {
    isLoggedIn: false,
    isAdmin: JSON.parse(localStorage.getItem("isAdmin")) || false,
    password: null,
    email: null,
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.isAdmin = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.token = action.payload.token;
      localStorage.setItem("isAdmin", JSON.stringify(state.isAdmin));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.isAdmin = false;
      state.password = null;
      state.email = null;
      state.token = null;
    },
  },
});

export const { login, logout } = adminUserSlice.actions;

export default adminUserSlice.reducer;
