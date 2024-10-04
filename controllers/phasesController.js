import Phases from '../models/phasesModel.js';
import * as factory from './handleFactory.js';

export const getAllPhases = factory.getAll(Phases);
export const getPhases = factory.getOne(Phases);
export const createPhases = factory.createOne(Phases);
export const updatePhases = factory.updateOne(Phases);
export const deletePhases = factory.deleteOne(Phases);
