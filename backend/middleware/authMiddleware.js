import jwt from "jsonwebtoken";
import asyncHandler from "./asyncHandler.js";
import Account from "../models/Account.js";

// Protect Auth
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // Read JWT from the Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Get the token from the Bearer string
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await Account.findById(decoded.userId).select("-password");

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

export { protect };
