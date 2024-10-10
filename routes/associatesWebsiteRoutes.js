import express from "express";
import {
	createAssociatesWebsite,
	getAssociatesWebsites,
	getAssociatesWebsite,
	deleteAssociatesWebsite,
	updateAssociatesWebsite,
} from "../controllers/associatesWebsiteController.js";
import { associateWebsiteValidationSchema } from "../validations/associateWebsiteValidator.js";
import { validateSchema } from "../middleware/validationMiddleware.js";
import checkObjectId from "../middleware/checkObjectId.js";

const router = express.Router();

router
	.route("/")
	.get(getAssociatesWebsites)
	.post(
		validateSchema(associateWebsiteValidationSchema),
		createAssociatesWebsite
	);

router
	.route("/:id", checkObjectId)
	.get(getAssociatesWebsite)
	.put(updateAssociatesWebsite)
	.delete(deleteAssociatesWebsite);

export default router;
