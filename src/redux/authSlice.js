import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthorized: false,
    user: {},
  },
  reducers: {
    login: (state, action) => {
      state.isAuthorized = true;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isAuthorized = false;
      state.user = {};
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
