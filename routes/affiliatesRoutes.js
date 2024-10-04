import express from "express";

import checkObjectId from "../middleware/checkObjectId.js";
import {
  createAffiliates,
  deleteAffiliates,
  getAffiliates,
  getAllAffiliates,
  updateAffiliates,
} from "../controllers/affiliatesController.js";

const router = express.Router();

router.route("/").post(createAffiliates).get(getAllAffiliates);

router
  .route("/:id", checkObjectId)
  .get(getAffiliates)
  .put(updateAffiliates)
  .delete(deleteAffiliates);

export default router;
