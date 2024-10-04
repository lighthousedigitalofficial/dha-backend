import RegistrationProperty from "../models/registrationPropertyModel.js";
import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from "./handleFactory.js";

export const createRegistrationProperty = createOne(RegistrationProperty);
export const getRegistrationProperties = getAll(RegistrationProperty);
export const getRegistrationProperty = getOne(RegistrationProperty);
export const updateRegistrationProperty = updateOne(RegistrationProperty);
export const deleteRegistrationProperty = deleteOne(RegistrationProperty);
