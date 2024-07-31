// Import dotenv
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express from "express";
import cors from "cors";

// Import Database
import connectDB from "./config/db.js";

connectDB(); // Database Conncection Object
const app = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));