import mongoose from "mongoose";
import slugify from "slugify";

const affiliatesSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

// Pre-save middleware to auto-generate slug
affiliatesSchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
  next();
});

const Affiliates = mongoose.model("Affiliates", affiliatesSchema);

export default Affiliates;
