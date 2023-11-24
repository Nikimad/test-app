import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    is_authorized: false,
    is_admin: false,
  },
  reducers: {},
});

export default authSlice.reducer;
