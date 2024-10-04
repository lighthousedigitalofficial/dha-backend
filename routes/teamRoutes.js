import express from "express";
import {
    createTeam,
    deleteTeam,
    getTeam,
    getTeams,
    updateTeam,
} from "../controllers/teamController.js";

const router = express.Router();

router.route("/").post(createTeam).get(getTeams);
router
    .route("/:id")
    .get(getTeam)
    .put(updateTeam)
    .delete(deleteTeam);

export default router;
