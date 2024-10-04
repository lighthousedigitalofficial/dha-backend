import Activity from "../models/activityModel.js";
import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from "./handleFactory.js";

export const createActivity = createOne(Activity);
export const getActivities = getAll(Activity);
export const getActivity = getOne(Activity);
export const updateActivity = updateOne(Activity);
export const deleteActivity = deleteOne(Activity);
