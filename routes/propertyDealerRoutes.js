import express from "express";
import {
  createPropertyDealer,
  deletePropertyDealer,
  getPropertyDealer,
  getPropertyDealers,
  updatePropertyDealer,
} from "../controllers/propertyDealerController.js";
import checkObjectId from "../middleware/checkObjectId.js";

const router = express.Router();

router.route("/").post(createPropertyDealer).get(getPropertyDealers);

router
  .route("/:id", checkObjectId)
  .get(getPropertyDealer)
  .put(updatePropertyDealer)
  .delete(deletePropertyDealer);

export default router;
