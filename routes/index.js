import express from "express";

const router = express.Router();

import userRoutes from "./userRoutes.js";
import associateWebsitesRoutes from "./associatesWebsiteRoutes.js";
import bannerRoutes from "./bannerRoutes.js";
import noticeRoutes from "./noticeRoutes.js";
import videoRoutes from "./videoRoutes.js";

router.use("/users", userRoutes);
router.use("/associate-websites", associateWebsitesRoutes); 
router.use("/banners", bannerRoutes); 
router.use("/notices", noticeRoutes); 
router.use("/videos", videoRoutes); 

export default router;
