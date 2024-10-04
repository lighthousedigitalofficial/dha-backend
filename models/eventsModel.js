import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, "Please provide a title."],
		},
		slug: {
			type: String,
		},
		description: {
			type: String,
			required: [true, "Please provide a description."],
		},
		images: [
			{
				type: String,
			},
		],
	},
	{
		timestamps: true,
	}
);

const Events = mongoose.model("Events", eventsSchema);

export default Events;
