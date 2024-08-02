import express from "express";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

import {
  getAllRealtors,
  getSingleRealtor,
  addNewRealtor,
  deleteRealtor,
  updateRealtor,
} from "../controllers/realtorsController.js";

router.route("/all").get(getAllRealtors);
router.route("/:id").get(getSingleRealtor);
router.route("/add").post(protect, addNewRealtor);
router.route("/:id").delete(protect, deleteRealtor);
router.route("/:id").put(protect, updateRealtor);

export default router;
