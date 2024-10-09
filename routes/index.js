import express from "express";

const router = express.Router();

import userRoutes from "./userRoutes.js";
import associateWebsitesRoutes from "./associatesWebsiteRoutes.js";
import bannerRoutes from "./bannerRoutes.js";
import noticeRoutes from "./noticeRoutes.js";
import videoRoutes from "./videoRoutes.js";
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

import mediaRoutes from "./mediaRoutes.js"
import propertyDealerRoutes from "./propertyDealerRoutes.js";
import totalRoutes from "./totalRoutes.js";

router.use("/users", userRoutes);

// Kiran
router.use("/phases", phasesRoutes);
router.use("/facilities", facilitiesRoutes);
router.use("/events", eventsRoutes);
router.use("/engineers", engineersRoutes);
router.use("/affiliates", affiliatesRoutes);
router.use("/property-dealer", propertyDealerRoutes);
router.use("/totals", totalRoutes);

// Waseem
router.use("/activities", activityRoutes);
router.use("/sale-properties", salePropertyRoutes);
router.use("/purchase-properties", purchasePropertyRoutes);
router.use("/registration-properties", registrationPropertyRoutes);
router.use("/teams", teamRoutes);
router.use("/portal-guides", portalGuideRoutes);

// Ahsan
router.use("/associate-websites", associateWebsitesRoutes);
router.use("/banners", bannerRoutes);
router.use("/notices", noticeRoutes);
router.use("/videos", videoRoutes);
router.use("/media", mediaRoutes);

export default router;
