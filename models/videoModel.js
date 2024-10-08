import mongoose from "mongoose";
import { checkReferenceId } from "../utils/helpers.js";

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
		mediaId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Media",
			required: [true, "Please provide a related media ID."],
		},
	},
	{
		timestamps: true,
	}
);

// Pre 'find' middleware to auto-populate the mediaId field
videoSchema.pre("find", function (next) {
	this.populate({
		path: "mediaId",
		select: "title",
	});
	next();
});

videoSchema.pre("save", async function (next) {
	await checkReferenceId("Media", this.mediaId, next);
	next();
});

const Video = mongoose.model("Video", videoSchema);

export default Video;
