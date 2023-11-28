import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    is_authorized: false,
    is_admin: false,
  },
  reducers: {
    signup(state) {
      return state;
    },
    signin(state) {
      return state;
    },
    logout(state) {
      return state;
    },
    getUser(state) {
      return state;
    },
    signupSuccess(state) {
      return state;
    },
    signinSuccess(state) {
      return state;
    },
    logoutSuccess(state) {
      return state;
    },
    getUserSuccess(state) {
      return state;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
