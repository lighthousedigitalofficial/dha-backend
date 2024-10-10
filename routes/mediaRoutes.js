import express from "express";
import { validateSchema } from "../middleware/validationMiddleware.js";
import { mediaValidationSchema } from "../validations/mediaValidator.js";
import {
	createMedia,
	getMedias,
	getMedia,
	deleteMedia,
	updateMedia,
	getMediaBySlug,
	updateMediaStatus, // Import the update media status controller
} from "../controllers/mediaController.js";

const router = express.Router();

router
	.route("/")
	.get(getMedias)
	.post(validateSchema(mediaValidationSchema), createMedia);

router.route("/:id").get(getMedia).put(updateMedia).delete(deleteMedia);

// Route for getting media by slug
router.route("/slug/:slug").get(getMediaBySlug);

// Route for updating the media status
router.route("/:id/status").patch(updateMediaStatus); // New route for updating media status

export default router;
