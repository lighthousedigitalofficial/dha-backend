import mongoose from "mongoose";
import { checkReferenceId } from "../utils/helpers.js";

const engineersSchema = new mongoose.Schema(
  {
    registerNumber: {
      type: Number,
      required: [true, "Please provide a register number."],
    },
    firmName: {
      type: String,
      required: [true, "Please provide a firm name."],
    },
    slug: {
      type: String,
    },
    engineerName: {
      type: String,
      required: [true, "Please provide an engineer name."],
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    affiliateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Affiliates",
      required: [true, "Please provide an affiliate ID."],
    },
  },
  {
    timestamps: true,
  }
);

engineersSchema.pre('find', function (next) {
  this.populate({
    path: 'affiliateId', 
    select: 'name',
  });
  next();
});

engineersSchema.pre('save', async function (next) {
  await checkReferenceId('Affiliates', this.affiliateId, next); 
  next();
});

const Engineers = mongoose.model("Engineers", engineersSchema);

export default Engineers;
