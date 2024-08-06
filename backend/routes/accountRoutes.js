import express from "express";
const router = express.Router();

import {
  authUser,
  registerUser,
  logoutUser,
} from "../controllers/accountController.js";

router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/logout").post(logoutUser);

export default router;
