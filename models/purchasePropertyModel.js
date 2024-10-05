import mongoose from "mongoose";

const purchasePropertySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide a name."],
		},
		cnic: {
			type: String,
			required: [true, "Please provide your CNIC."],
		},
		phone: {
			type: String,
			required: [true, "Please provide your phone number."],
		},
		email: {
			type: String,
			required: [true, "Please provide your email."],
		},
		type: {
			type: String,
			enum: ["residential", "commercial", "shop", "apartment"],
			required: true,
		},
		phase: String,
		size: String,
		price: {
			type: Number,
			required: [true, "Please provide the price."],
		},
		status: {
			type: String,
			enum: ["available", "purchased", "pending"],
			default: "available",
		},
	},
	{
		timestamps: true,
	}
);

const PurchaseProperty = mongoose.model(
	"PurchaseProperty",
	purchasePropertySchema
);

export default PurchaseProperty;
