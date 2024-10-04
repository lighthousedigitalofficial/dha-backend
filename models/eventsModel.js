import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';


const eventsSchema = new mongoose.Schema(
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
