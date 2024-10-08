import mongoose from "mongoose";

const portalGuideSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Please provide a title."],
		},
		content: {
			type: String,
			required: [true, "Please provide content."],
		},
		author: {
			type: String,
			required: [true, "Please provide the author's name."],
		},
		video: {
			type: String,
		},
		status: {
			type: String,
			enum: ["published", "draft"],
			default: "draft",
		},
	},
	{
		timestamps: true,
	}
);

const PortalGuide = mongoose.model("PortalGuide", portalGuideSchema);

export default PortalGuide;
