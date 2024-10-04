import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
	{
	
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
