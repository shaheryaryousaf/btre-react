import Account from "../models/Account.js";
import asyncHandler from "../middleware/asyncHandler.js";
import generateToken from "../utils/generateToken.js";

// ====================================
// Login User
// ====================================
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Account.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(res, user._id);

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: token,
    });
  } else {
    res.status(401).json({ message: "Invalid Email or Password." });
  }
});

// ====================================
// Register User
// ====================================
const registerUser = asyncHandler(async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await Account.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = await Account.create({
      name,
      email,
      password,
    });

    if (user) {
      generateToken(res, user._id);
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    if (!res.headersSent) {
      res.status(500).json({ message: error.message });
    }
  }
});

// ====================================
// Logout User
// ====================================
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
});

export { authUser, registerUser, logoutUser };
