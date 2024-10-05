import express from "express";
import { validate } from "../middleware/validationMiddleware.js";
import { noticeValidationSchema } from "../validations/noticeValidation.js";
import {
	createNotice,
	getNotices,
	getNotice,
	deleteNotice,
	updateNotice,
} from "../controllers/noticeController.js";

const router = express.Router();

router
	.route("/")
	.get(getNotices)
	.post(validate(noticeValidationSchema), createNotice); // Apply validation middleware for POST

router
	.route("/:id")
	.get(getNotice)
	.put(validate(noticeValidationSchema), updateNotice) // Apply validation middleware for PUT
	.delete(deleteNotice);

export default router;
