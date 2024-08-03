import express from "express";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

import {
  getAllListings,
  getSingleListing,
  addNewListing,
  deleteListing,
  updateListing,
  upload,
} from "../controllers/listingsController.js";

router.route("/all").get(getAllListings);
router.route("/:id").get(getSingleListing);
router.route("/add").post(protect, upload.single("image"), addNewListing);
router.route("/:id").delete(protect, deleteListing);
router.route("/:id").put(protect, upload.single("image"), updateListing);

export default router;
