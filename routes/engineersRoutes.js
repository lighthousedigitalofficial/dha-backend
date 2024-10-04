import express from "express";

import checkObjectId from "../middleware/checkObjectId.js";
import {
  createEngineers,
  deleteEngineers,
  getAllEngineers,
  getEngineers,
  updateEngineers,
} from "../controllers/engineersController.js";

const router = express.Router();

router.route("/").post(createEngineers).get(getAllEngineers);

router
  .route("/:id", checkObjectId)
  .get(getEngineers)
  .put(updateEngineers)
  .delete(deleteEngineers);

export default router;
