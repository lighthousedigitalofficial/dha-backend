import mongoose from "mongoose";

const associatesWebsiteSchema = new mongoose.Schema(
	{

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
