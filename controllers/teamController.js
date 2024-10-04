import Team from "../models/teamModel.js";
import {
    createOne,
    deleteOne,
    getAll,
    getOne,
    updateOne,
} from "./handleFactory.js";

export const createTeam = createOne(Team);
export const getTeams = getAll(Team);
export const getTeam = getOne(Team);
export const updateTeam = updateOne(Team);
export const deleteTeam = deleteOne(Team);
