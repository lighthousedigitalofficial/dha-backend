import Engineers from '../models/engineersModel.js';
import * as factory from './handleFactory.js';

export const getAllEngineers = factory.getAll(Engineers);
export const getEngineers = factory.getOne(Engineers);
export const createEngineers = factory.createOne(Engineers);
export const updateEngineers = factory.updateOne(Engineers);
export const deleteEngineers = factory.deleteOne(Engineers);
