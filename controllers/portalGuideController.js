import PortalGuide from "../models/portalGuideModel.js";
import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from "./handleFactory.js";

export const createPortalGuide = createOne(PortalGuide);
export const getPortalGuides = getAll(PortalGuide);
export const getPortalGuide = getOne(PortalGuide);
export const updatePortalGuide = updateOne(PortalGuide);
export const deletePortalGuide = deleteOne(PortalGuide);
