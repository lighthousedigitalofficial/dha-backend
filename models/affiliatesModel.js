import mongoose from "mongoose";

const affiliatesSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide a name."],
		},
		slug: {
			type: String,
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

const Affiliates = mongoose.model("Affiliates", affiliatesSchema);

export default Affiliates;
