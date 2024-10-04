import mongoose from "mongoose";
import slugify from "slugify";

const eventsSchema = new mongoose.Schema(
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

// Pre-save middleware to auto-generate slug
eventsSchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});

const Events = mongoose.model("Events", eventsSchema);

export default Events;
