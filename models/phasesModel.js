import mongoose from "mongoose";
import slugify from "slugify";

const phasesSchema = new mongoose.Schema(
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
