import express from "express";
import {
    createPurchaseProperty,
    deletePurchaseProperty,
    getPurchaseProperty,
    getPurchaseProperties,
    updatePurchaseProperty,
} from "../controllers/purchasePropertyController.js";

const router = express.Router();

router.route("/").post(createPurchaseProperty).get(getPurchaseProperties);
router
    .route("/:id")
    .get(getPurchaseProperty)
    .put(updatePurchaseProperty)
    .delete(deletePurchaseProperty);

export default router;
