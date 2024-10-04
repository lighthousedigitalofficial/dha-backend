import express from "express";
import { validate } from "../middleware/validationMiddleware.js";
import { videoValidationSchema } from "../validationSchema/videoValidation.js";
import {
    createVideo,
    getVideos,
    getVideo,
    deleteVideo,
    updateVideo,
} from "../controllers/videoController.js";

const router = express.Router();

router.route("/")
    .get(getVideos)
    .post(validate(videoValidationSchema), createVideo); 

router.route("/:id")
    .get(getVideo)
    .put(validate(videoValidationSchema), updateVideo) 
    .delete(deleteVideo);

export default router;
