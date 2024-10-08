import Affiliates from "../models/affiliatesModel.js";
import * as factory from "./handleFactory.js";

export const getAllAffiliates = factory.getAll(Affiliates);
export const getAffiliates = factory.getOne(Affiliates);
export const createAffiliates = factory.createOne(Affiliates);
export const updateAffiliates = factory.updateOne(Affiliates);
export const deleteAffiliates = factory.deleteOne(Affiliates);

export const getBySlug = factory.getOneBySlug(Affiliates);

