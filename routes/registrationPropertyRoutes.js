import express from "express";
import {
    createRegistrationProperty,
    deleteRegistrationProperty,
    getRegistrationProperty,
    getRegistrationProperties,
    updateRegistrationProperty,
} from "../controllers/registrationPropertyController.js";

const router = express.Router();

router.route("/").post(createRegistrationProperty).get(getRegistrationProperties);
router
    .route("/:id")
    .get(getRegistrationProperty)
    .put(updateRegistrationProperty)
    .delete(deleteRegistrationProperty);

export default router;
