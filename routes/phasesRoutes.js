import express from "express";
import {
  createPhases,
  deletePhases,
  getAllPhases,
  getPhases,
  updatePhases,
} from "../controllers/phasesController.js";
import checkObjectId from "../middleware/checkObjectId.js";

const router = express.Router();

router.route("/").post(createPhases).get(getAllPhases);
router.route("/slug/:slug").get(getBySlug);

router
  .route("/:id", checkObjectId)
  .get(getPhases)
  .put(updatePhases)
  .delete(deletePhases);

export default router;
