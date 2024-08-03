import express from "express";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

import {
  getAllRealtors,
  getSingleRealtor,
  addNewRealtor,
  deleteRealtor,
  updateRealtor,
  upload,
} from "../controllers/realtorsController.js";

router.route("/all").get(getAllRealtors);
router.route("/:id").get(getSingleRealtor);
router.route("/add").post(protect, upload.single("image"), addNewRealtor);
router.route("/:id").delete(protect, deleteRealtor);
router.route("/:id").put(protect, upload.single("image"), updateRealtor);

export default router;
