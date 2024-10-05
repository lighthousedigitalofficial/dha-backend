import express from "express";
import {
  createPropertyDealer,
  deletePropertyDealer,
  getAllPropertyDealers,
  getBySlug,
  getPropertyDealer,
  updatePropertyDealer,
} from "../controllers/propertyDealerController.js";
import checkObjectId from "../middleware/checkObjectId.js";

const router = express.Router();

router.route("/").post(createPropertyDealer).get(getAllPropertyDealers);

router.route("/slug/:slug").get(getBySlug);

router
  .route("/:id", checkObjectId)
  .get(getPropertyDealer)
  .put(updatePropertyDealer)
  .delete(deletePropertyDealer);

export default router;
