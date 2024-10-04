import mongoose from "mongoose";
import slugify from "slugify";

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

// Pre-save middleware to auto-generate slug
engineersSchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = slugify(this.engineerName, { lower: true, strict: true });
  }
  next();
});

const Engineers = mongoose.model("Engineers", engineersSchema);

export default Engineers;
