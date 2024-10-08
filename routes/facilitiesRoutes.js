import express from "express";

import checkObjectId from "../middleware/checkObjectId.js";
import {
  createFacilities,
  deleteFacilities,
  getAllFacilities,
  getBySlug,
  getFacilities,
  updateFacilities,
} from "../controllers/facilitiesController.js";

const router = express.Router();

router.route("/").post(createFacilities).get(getAllFacilities);
router.route("/slug/:slug").get(getBySlug);


router
  .route("/:id", checkObjectId)
  .get(getFacilities)
  .put(updateFacilities)
  .delete(deleteFacilities);

export default router;
