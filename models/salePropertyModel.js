import mongoose from "mongoose";

const salePropertySchema = new mongoose.Schema(
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
        plotNum: String,
        streetNum: String,
        sector: String,
        size: String,
        phase: String,
        demand: String,
        type: {
            type: String,
            enum: ["residential", "commercial", "shop", "apartment"],
            required: true,
        },
        document: String,
        status: {
            type: String,
            enum: ["available", "sold", "pending"],
            default: "available",
        },
    },
    {
        timestamps: true,
    }
);

const SaleProperty = mongoose.model("SaleProperty", salePropertySchema);

export default SaleProperty;
