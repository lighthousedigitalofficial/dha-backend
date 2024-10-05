import express from "express";
import { validateSchema } from "../middleware/validationMiddleware.js";
import { mediaValidationSchema } from "../validations/mediaValidator.js";
import {
  createMedia,  // Use the custom controller
  getMedias,
  getMedia,
  deleteMedia,
  updateMedia,
} from "../controllers/mediaController.js";

const router = express.Router();

router
  .route("/")
  .get(getMedias)
  .post(validateSchema(mediaValidationSchema), createMedia); // POST request

router
  .route("/:id")
  .get(getMedia)
  .put(validateSchema(mediaValidationSchema), updateMedia)
  .delete(deleteMedia);

export default router;
