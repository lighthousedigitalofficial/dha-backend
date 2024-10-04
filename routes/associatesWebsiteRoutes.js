import express from "express";
import {
    createAssociatesWebsite,
    getAssociatesWebsites,
    getAssociatesWebsite,
    deleteAssociatesWebsite,
    updateAssociatesWebsite,
} from "../controllers/associatesWebsiteController.js";
import { associateWebsiteValidationSchema } from "../validationSchema/associateWebsiteValidation.js";
import { validate } from "../middleware/validationMiddleware.js";
const router = express.Router();

router.route("/")
    .get(getAssociatesWebsites)         
    .post(validate(associateWebsiteValidationSchema), createAssociatesWebsite); 

router.route("/:id")
    .get(getAssociatesWebsite)          
    .put(validate(associateWebsiteValidationSchema), updateAssociatesWebsite) 
    .delete(deleteAssociatesWebsite);   

export default router;
