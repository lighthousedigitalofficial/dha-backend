import express from "express";

const router = express.Router();

import userRoutes from "./userRoutes.js";

router.use("/users", userRoutes);

export default router;
