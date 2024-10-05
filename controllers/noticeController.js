import Notice from "../models/noticeModel.js";
import {
	createOne,
	deleteOne,
	getAll,
	getOne,
	updateOne,
} from "./handleFactory.js";

export const createNotice = createOne(Notice);
export const getNotices = getAll(Notice);
export const getNotice = getOne(Notice);
export const deleteNotice = deleteOne(Notice);
export const updateNotice = updateOne(Notice);
