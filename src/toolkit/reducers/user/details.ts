import { createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: {
    isLogin: false,
    role: "",
    data: {},
  },
  reducers: {
    userLogin: (state, action) => {
      state.isLogin = true;
      state.role = action.payload.role;
      state.data = action.payload;
    },
    adminLogin: (state, action) => {
      state.isLogin = true;
      state.role = "admin";
      state.data = action.payload;
    },
    superAdminLogin: (state) => {
      state.isLogin = true;
      state.role = "super-admin";
    },
    logout: (state) => {
      state.isLogin = false;
      state.role = "";
      state.data = {};
    },
  },
});

export const { userLogin, adminLogin, superAdminLogin, logout } =
  userDetailsSlice.actions;
export default userDetailsSlice.reducer;
