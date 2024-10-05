import express from "express";
import {
	createAssociatesWebsite,
	getAssociatesWebsites,
	getAssociatesWebsite,
	deleteAssociatesWebsite,
	updateAssociatesWebsite,
} from "../controllers/associatesWebsiteController.js";
import { associateWebsiteValidationSchema } from "../validations/associateWebsiteValidation.js";
import { validateSchema } from "../middleware/validationMiddleware.js";

const router = express.Router();

router
	.route("/")
	.get(getAssociatesWebsites)
	.post(
		validateSchema(associateWebsiteValidationSchema),
		createAssociatesWebsite
	);

router
	.route("/:id")
	.get(getAssociatesWebsite)
	.put(
		validateSchema(associateWebsiteValidationSchema),
		updateAssociatesWebsite
	)
	.delete(deleteAssociatesWebsite);

export default router;
