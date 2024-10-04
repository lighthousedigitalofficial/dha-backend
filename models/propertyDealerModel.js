import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const propertyDealerSchema = new mongoose.Schema(
  {
    id: {
        type: String,
        default: uuidv4, 
        unique: true,
      },
    agency: {
      type: String,
      required: [true, "Please provide an agency name."],
    },
    slug: {
      type: String,
    },
    fullName: {
      type: String,
      required: [true, "Please provide a full name."],
    },
    address: {
      type: String,
      required: [true, "Please provide an address."],
    },
    phone: {
      type: String,
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

const PropertyDealer = mongoose.model("PropertyDealer", propertyDealerSchema);

export default PropertyDealer;
