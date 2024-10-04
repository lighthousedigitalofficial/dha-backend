import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"; 

const videoSchema = new mongoose.Schema(
	{
		id: {
			type: String,
			default: uuidv4, 
			unique: true,
		},
		url: {
			type: String,
			required: [true, "Please provide the video URL."],
		},
		title: {
			type: String,
			required: [true, "Please provide the video title."],
		},
	},
	{
		timestamps: true, 
	}
);

const Video = mongoose.model("Video", videoSchema);

export default Video;
