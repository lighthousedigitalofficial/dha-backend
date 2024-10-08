import express from "express";
import {
	createUser,
	deleteUser,
	getUser,
	getUsers,
	updateUser,
} from "./../controllers/userController.js";
import { login, signup, logout } from "../controllers/authController.js";
import { protect, restrictTo } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", signup);
router.post("/logout", protect, logout);

// router.put("/update-password", protect, selectModelByRole, updatePassword);

router.route("/").post(createUser).get(getUsers);

router.route("/:id").get(getUser).delete(deleteUser).put(updateUser);

export default router;
