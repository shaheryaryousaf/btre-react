import express from "express";

const router = express.Router();

import {
  getAllListings,
  getSingleListing,
  addNewListing,
  deleteListingCompany, updateListing
} from "../controllers/listingsController.js";

router.route("/all").get(getAllListings);
router.route("/:id").get(getSingleListing);
router.route("/add").post(addNewListing);
router.route("/:id").delete(deleteListingCompany);
router.route("/:id").put(updateListing);

export default router;
