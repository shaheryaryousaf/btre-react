import express from "express";
const router = express.Router();

import {
  getAllRealtors,
  getSingleRealtor,
  addNewRealtor,
  deleteRealtor,
  updateRealtor,
} from "../controllers/realtorsController.js";

router.route("/all").get(getAllRealtors);
router.route("/:id").get(getSingleRealtor);
router.route("/add").post(addNewRealtor);
router.route("/:id").delete(deleteRealtor);
router.route("/:id").put(updateRealtor);

export default router;
