import SaleProperty from "../models/salePropertyModel.js";
import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from "./handleFactory.js";

export const createSaleProperty = createOne(SaleProperty);
export const getSaleProperties = getAll(SaleProperty);
export const getSaleProperty = getOne(SaleProperty);
export const updateSaleProperty = updateOne(SaleProperty);
export const deleteSaleProperty = deleteOne(SaleProperty);
