import PropertyDealer from "../models/propertyDealerModel.js";
import * as factory from "./handleFactory.js";

export const getAllPropertyDealers = factory.getAll(PropertyDealer);
export const getPropertyDealer = factory.getOne(PropertyDealer);
export const createPropertyDealer = factory.createOne(PropertyDealer);
export const updatePropertyDealer = factory.updateOne(PropertyDealer);
export const deletePropertyDealer = factory.deleteOne(PropertyDealer);
