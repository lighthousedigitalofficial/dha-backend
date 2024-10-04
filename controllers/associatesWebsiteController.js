import AssociatesWebsite from "../models/associatesWebsiteModel.js";
import {
	createOne,
	deleteOne,
	getAll,
	getOne,
	updateOne,
} from "./handleFactory.js";


export const createAssociatesWebsite = createOne(AssociatesWebsite);
export const getAssociatesWebsites = getAll(AssociatesWebsite);
export const getAssociatesWebsite = getOne(AssociatesWebsite);
export const deleteAssociatesWebsite = deleteOne(AssociatesWebsite);
export const updateAssociatesWebsite = updateOne(AssociatesWebsite);
