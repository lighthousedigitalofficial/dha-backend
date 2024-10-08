// import express from "express";
// import {
//     createActivity,
//     deleteActivity,
//     getActivity,
//     getActivities,
//     updateActivity,
// } from "../controllers/activityController.js";

// const router = express.Router();

// router.route("/").post(createActivity).get(getActivities);
// router
//     .route("/:id")
//     .get(getActivity)
//     .put(updateActivity)
//     .delete(deleteActivity);

// export default router;




// routes/activityRoutes.js
import express from "express";
import {
  createActivity,
  deleteActivity,
  getActivity,
  getActivities,
  updateActivity,
} from "../controllers/activityController.js";
import { validateSchema } from "../middleware/validateSchema.js";  // Import validation middleware
import { activityValidation } from "../validations/activityValidation.js";  // Import Joi schema

const router = express.Router();

router
  .route("/")
  .post(validateSchema(activityValidation), createActivity)  // Apply validation
  .get(getActivities);

router
  .route("/:id")
  .get(getActivity)
  .put(validateSchema(activityValidation), updateActivity)   // Apply validation
  .delete(deleteActivity);

export default router;

