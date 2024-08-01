import express from "express";

const router = express.Router();

import { addNewListing } from "../controllers/listingsController.js";

router.route("/add").post(addNewListing);

export default router;
