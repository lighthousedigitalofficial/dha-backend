import express from "express";
import { validateSchema } from "../middleware/validationMiddleware.js"; 
import { noticeValidationSchema } from "../validations/noticeValidator.js";
import checkObjectId from "../middleware/checkObjectId.js"; 
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
	.post(validateSchema(noticeValidationSchema), createNotice); 

router
	.route("/:id")
	.get(checkObjectId, getNotice) 
	.put(
		checkObjectId, 
		updateNotice
	)
	.delete(checkObjectId, deleteNotice);
export default router;
