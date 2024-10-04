import express from "express";

const router = express.Router();

import userRoutes from "./userRoutes.js";
import phasesRoutes from "./phasesRoutes.js";
import facilitiesRoutes from "./facilitiesRoutes.js";
import eventsRoutes from "./eventsRoutes.js";
import engineersRoutes from "./engineersRoutes.js";
import affiliatesRoutes from "./affiliatesRoutes.js";
import activityRoutes from "./activityRoutes.js";
import salePropertyRoutes from "./salePropertyRoutes.js";
import purchasePropertyRoutes from "./purchasePropertyRoutes.js";
import registrationPropertyRoutes from "./registrationPropertyRoutes.js";
import teamRoutes from "./teamRoutes.js";
import portalGuideRoutes from "./portalGuideRoutes.js";

router.use("/users", userRoutes);
router.use("/phases", phasesRoutes);
router.use("/facilities", facilitiesRoutes);
router.use("/events", eventsRoutes);
router.use("/engineers", engineersRoutes);
router.use("/affiliates", affiliatesRoutes);

router.use("/activities", activityRoutes);
router.use("/sale-properties", salePropertyRoutes);
router.use("/purchase-properties", purchasePropertyRoutes);
router.use("/registration-properties", registrationPropertyRoutes);
router.use("/teams", teamRoutes);
router.use("/portal-guides", portalGuideRoutes);

export default router;
