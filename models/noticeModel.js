import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Please provide a title for the notice."],
		},
		image: {
			type: String,
			required: [true, "Please provide an image URL for the notice."],
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		timestamps: true,
	}
);

const Notice = mongoose.model("Notice", noticeSchema);

export default Notice;
