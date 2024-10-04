import express from "express";

const router = express.Router();

import userRoutes from "./userRoutes.js";
import phasesRoutes from "./phasesRoutes.js";
import facilitiesRoutes from "./facilitiesRoutes.js";
import eventsRoutes from "./eventsRoutes.js";
import engineersRoutes from "./engineersRoutes.js";
import affiliatesRoutes from "./affiliatesRoutes.js";

router.use("/users", userRoutes);
router.use("/phases", phasesRoutes);
router.use("/facilities", facilitiesRoutes);
router.use("/events", eventsRoutes);
router.use("/engineers", engineersRoutes);
router.use("/affiliates", affiliatesRoutes);

export default router;
