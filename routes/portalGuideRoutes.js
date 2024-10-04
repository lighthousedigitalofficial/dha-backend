import express from "express";
import {
    createPortalGuide,
    deletePortalGuide,
    getPortalGuide,
    getPortalGuides,
    updatePortalGuide,
} from "../controllers/portalGuideController.js";

const router = express.Router();

router.route("/").post(createPortalGuide).get(getPortalGuides);
router
    .route("/:id")
    .get(getPortalGuide)
    .put(updatePortalGuide)
    .delete(deletePortalGuide);

export default router;
