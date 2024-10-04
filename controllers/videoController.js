import Video from "../models/videoModel.js";
import {
	createOne,
	deleteOne,
	getAll,
	getOne,
	updateOne,
} from "./handleFactory.js";


export const createVideo = createOne(Video);
export const getVideos = getAll(Video);
export const getVideo = getOne(Video);
export const deleteVideo = deleteOne(Video);
export const updateVideo = updateOne(Video);
