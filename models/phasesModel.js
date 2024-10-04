import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid';

const phasesSchema = new mongoose.Schema(
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
    location: {
      type: String,
      required: [true, "Please provide a location."],
    },
    images: [
      {
        type: String,
      },
    ],
    videos: [{
      type: String,
    }],
    services: [{
      type: String,
      required: [true, "Please provide services."],
    }],
    type: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Phases = mongoose.model("Phases", phasesSchema);

export default Phases;
