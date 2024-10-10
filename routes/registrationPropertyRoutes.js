import express from "express";
import {
	createRegistrationProperty,
	deleteRegistrationProperty,
	getRegistrationProperty,
	getRegistrationProperties,
	updateRegistrationProperty,
} from "../controllers/registrationPropertyController.js";
import { validateSchema } from "../middleware/validateSchema.js";
import { registrationPropertyValidation } from "../validations/registrationPropertyValidation.js";

const router = express.Router();

// Routes for Registration Properties
router
	.route("/")
	.post(
		validateSchema(registrationPropertyValidation),
		createRegistrationProperty
	)
	.get(getRegistrationProperties);

router
	.route("/:id")
	.get(getRegistrationProperty)
	.put(updateRegistrationProperty)
	.delete(deleteRegistrationProperty);

export default router;
