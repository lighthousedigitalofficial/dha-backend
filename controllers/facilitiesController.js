import Facilities from '../models/facilitiesModel.js';
import * as factory from './handleFactory.js';

export const getAllFacilities = factory.getAll(Facilities);
export const getFacilities = factory.getOne(Facilities);
export const createFacilities = factory.createOne(Facilities);
export const updateFacilities = factory.updateOne(Facilities);
export const deleteFacilities = factory.deleteOne(Facilities);
