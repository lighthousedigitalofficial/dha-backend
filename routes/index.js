import express from "express";

const router = express.Router();

import userRoutes from "./userRoutes.js";
import activityRoutes from "./activityRoutes.js";
import salePropertyRoutes from "./salePropertyRoutes.js";
import purchasePropertyRoutes from "./purchasePropertyRoutes.js";
import registrationPropertyRoutes from "./registrationPropertyRoutes.js";
import teamRoutes from "./teamRoutes.js";
import portalGuideRoutes from "./portalGuideRoutes.js";


router.use("/users", userRoutes);
router.use("/activities", activityRoutes);
router.use("/sale-properties", salePropertyRoutes);
router.use("/purchase-properties", purchasePropertyRoutes);
router.use("/registration-properties", registrationPropertyRoutes);
router.use("/teams", teamRoutes);
router.use("/portal-guides", portalGuideRoutes);
export default router;
