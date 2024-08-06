// authMiddleware.ts
import { Middleware } from "redux";
import { logout } from "./authSlice";

export const authMiddleware = (store) => (next) => (action) => {
  // Check if token has expired
  const expirationTime = localStorage.getItem("expirationTime");

  if (expirationTime && new Date().getTime() > Number(expirationTime)) {
    // Clear local storage and reset state
    store.dispatch(logout());
    // Redirect user to login page
    window.location.href = "/login";
    return;
  }

  // Otherwise, continue with the action
  return next(action);
};