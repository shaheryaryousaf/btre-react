// Import dotenv
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// Import Database
import connectDB from "./config/db.js";

// Import Routes
import accountRoutes from "./routes/accountRoutes.js";
import listingRoutes from "./routes/listingRoutes.js";
import realtorRoutes from "./routes/realtorRoutes.js";

connectDB(); // Database Conncection Object
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/auth", accountRoutes);
app.use("/api/listing", listingRoutes);
app.use("/api/realtor", realtorRoutes);

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
