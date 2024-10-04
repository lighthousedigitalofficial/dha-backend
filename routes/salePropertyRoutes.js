import express from "express";
import {
    createSaleProperty,
    deleteSaleProperty,
    getSaleProperty,
    getSaleProperties,
    updateSaleProperty,
} from "../controllers/salePropertyController.js";

const router = express.Router();

router.route("/").post(createSaleProperty).get(getSaleProperties);
router
    .route("/:id")
    .get(getSaleProperty)
    .put(updateSaleProperty)
    .delete(deleteSaleProperty);

export default router;
