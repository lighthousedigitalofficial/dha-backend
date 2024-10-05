import express from "express";
import {
  createTeam,
  deleteTeam,
  getTeam,
  getTeams,
  updateTeam,
} from "../controllers/teamController.js";
import { validateSchema } from "../middleware/validateSchema.js";
import { teamValidation } from "../validations/teamValidation.js";

const router = express.Router();

// Routes for Team Management
router.route("/")
  .post(validateSchema(teamValidation), createTeam)
  .get(getTeams);

router.route("/:id")
  .get(getTeam)
  .put(validateSchema(teamValidation), updateTeam)
  .delete(deleteTeam);

export default router;
