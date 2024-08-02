import express from "express";
const router = express.Router();

import { authUser, registerUser } from "../controllers/accountController.js";

router.route("/register").post(registerUser);
router.route("/login").post(authUser);

export default router;
