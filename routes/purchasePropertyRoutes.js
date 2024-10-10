import { validateSchema } from "../middleware/validateSchema.js";
import { purchasePropertyValidation } from "../validations/purchasePropertyValidation.js";
import express from "express";
import {
	createPurchaseProperty,
	deletePurchaseProperty,
	getPurchaseProperty,
	getPurchaseProperties,
	updatePurchaseProperty,
} from "../controllers/purchasePropertyController.js";

const router = express.Router();

router
	.route("/")
	.post(validateSchema(purchasePropertyValidation), createPurchaseProperty)
	.get(getPurchaseProperties);

router
	.route("/:id")
	.get(getPurchaseProperty)
	.put(updatePurchaseProperty)
	.delete(deletePurchaseProperty);

export default router;
