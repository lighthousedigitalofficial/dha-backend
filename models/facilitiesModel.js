import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const facilitiesSchema = new mongoose.Schema(
  {
    id: {
        type: String,
        default: uuidv4, 
        unique: true,
      },
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
    mainImage: {
        type: String,
        required: [true, "Please provide a main image."],
      },
    images: [
      {
        type: String,
      },
    ],
    services: [{
        type: String,
        required: [true, "Please provide services."],
      }],
     
    link: {
      type: String,
    },
   
  },
  {
    timestamps: true,
  }
);

const Facilities = mongoose.model("Facilities", facilitiesSchema);

export default Facilities;
