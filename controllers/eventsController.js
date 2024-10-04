import Events from "../models/eventsModel.js";
import * as factory from "./handleFactory.js";

export const getAllEvents = factory.getAll(Events);
export const getEvents = factory.getOne(Events);
export const createEvents = factory.createOne(Events);
export const updateEvents = factory.updateOne(Events);
export const deleteEvents = factory.deleteOne(Events);
