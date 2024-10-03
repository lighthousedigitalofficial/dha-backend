import express from "express";
import {
	createUser,
	deleteUser,
	getUser,
	getUsers,
	updateUser,
} from "./../controllers/userController.js";
import checkObjectId from "../middleware/checkObjectId.js";

const router = express.Router();

router.route("/").post(createUser).get(getUsers);

router
	.route("/:id", checkObjectId)
	.get(getUser)
	.put(updateUser)
	.delete(deleteUser);

export default router;
