import express from "express";
import { validate } from "../middleware/validationMiddleware.js";
import { bannerValidationSchema } from "../validationSchema/bannerValidation.js";
import {
    createBanner,
    getBanners,
    getBanner,
    deleteBanner,
    updateBanner,
} from "../controllers/bannerController.js";

const router = express.Router();

router.route("/")
    .get(getBanners)
    .post(validate(bannerValidationSchema), createBanner); 

router.route("/:id")
    .get(getBanner)
    .put(validate(bannerValidationSchema), updateBanner) 
    .delete(deleteBanner);

export default router;
