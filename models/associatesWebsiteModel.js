import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

const associatesWebsiteSchema = new mongoose.Schema(
	{
		id: {
			type: String,
			default: uuidv4, 
			unique: true,
		},
		logo: {
			type: String,
			required: [true, "Please provide the logo URL."],
		},
		link: {
			type: String,
			required: [true, "Please provide the website URL."],
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

const AssociatesWebsite = mongoose.model("AssociatesWebsite", associatesWebsiteSchema);

export default AssociatesWebsite;
