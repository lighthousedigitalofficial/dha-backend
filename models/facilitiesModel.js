import mongoose from "mongoose";
import slugify from "slugify";

const facilitiesSchema = new mongoose.Schema(
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
