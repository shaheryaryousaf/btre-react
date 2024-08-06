import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));

      const expirationTime = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days
      localStorage.setItem("expirationTime", expirationTime.toString());
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("expirationTime");
      apiSlice.util.resetApiState();
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const selectedUserInfo = (state) => state.auth.userInfo;

export default authSlice.reducer;
