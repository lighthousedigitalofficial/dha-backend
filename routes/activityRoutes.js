import express from "express";
import {
    createActivity,
    deleteActivity,
    getActivity,
    getActivities,
    updateActivity,
} from "../controllers/activityController.js";

const router = express.Router();

router.route("/").post(createActivity).get(getActivities);
router
    .route("/:id")
    .get(getActivity)
    .put(updateActivity)
    .delete(deleteActivity);

export default router;
