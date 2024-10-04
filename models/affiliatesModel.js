import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';


const affiliatesSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      default: uuidv4, 
      unique: true,
    },
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
    // bannerId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Banner",
    //   required: [true, "Please provide a banner ID."],
    // },
  },
  {
    timestamps: true,
  }
);

const Affiliates = mongoose.model("Affiliates", affiliatesSchema);

export default Affiliates;
