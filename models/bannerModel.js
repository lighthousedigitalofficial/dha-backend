import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"; 

const bannerSchema = new mongoose.Schema(
	{
		id: {
			type: String,
			default: uuidv4,
			unique: true,
		},
		type: {
			type: String,
			enum: ["image", "video"], 
			required: [true, "Please specify the banner type."],
		},
		mediaUrl: {
			type: String,
			required: [true, "Please provide the media URL."],
		},
		title: {
			type: String,
			required: [true, "Please provide a title for the banner."],
		},
		description: {
			type: String,
			required: [true, "Please provide a description for the banner."],
		},
		status: {
			type: String,
			enum: ["active", "inactive"],
			default: "active",
		},
	},
	{
		timestamps: true, 
	}
);

const Banner = mongoose.model("Banner", bannerSchema);

export default Banner;
