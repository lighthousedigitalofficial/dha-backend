import express from "express";
import { validateSchema } from "../middleware/validationMiddleware.js";
import { videoValidationSchema } from '../validations/videoValidator.js';
import checkObjectId from "../middleware/checkObjectId.js";
import {
	createVideo,
	getVideos,
	getVideo,
	deleteVideo,
	updateVideo,
} from "../controllers/videoController.js";

const router = express.Router();

router
	.route("/")
	.get(getVideos) 
	.post(validateSchema(videoValidationSchema), createVideo); 

router
	.route("/:id")
	.get(checkObjectId, getVideo)
	.put(
		checkObjectId, 
		updateVideo
	)
	.delete(checkObjectId, deleteVideo);

export default router;
