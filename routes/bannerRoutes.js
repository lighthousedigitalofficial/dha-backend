import express from "express";
import { validateSchema } from "../middleware/validationMiddleware.js";
import {bannerValidationSchema} from '../validations/bannerValidator.js';
import checkObjectId from "../middleware/checkObjectId.js";
import {
	createBanner,
	getBanners,
	getBanner,
	deleteBanner,
	updateBanner,
} from "../controllers/bannerController.js";

const router = express.Router();

router
	.route("/")
	.get(getBanners) 
	.post(validateSchema(bannerValidationSchema), createBanner); 

router
	.route("/:id")
	.get(checkObjectId, getBanner)
	.put(
		checkObjectId, 
		updateBanner
	)
	.delete(checkObjectId, deleteBanner); 

export default router;
