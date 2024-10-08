import PurchaseProperty from "../models/purchasePropertyModel.js";
import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from "./handleFactory.js";

export const createPurchaseProperty = createOne(PurchaseProperty);
export const getPurchaseProperties = getAll(PurchaseProperty);
export const getPurchaseProperty = getOne(PurchaseProperty);
export const updatePurchaseProperty = updateOne(PurchaseProperty);
export const deletePurchaseProperty = deleteOne(PurchaseProperty);
