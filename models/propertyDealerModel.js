import mongoose from "mongoose";
import slugify from "slugify";

const propertyDealerSchema = new mongoose.Schema(
  {
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

// Pre-save middleware to auto-generate slug
propertyDealerSchema.pre("save", function (next) {
  if (!this.slug) {
    this.slug = slugify(this.agency, { lower: true, strict: true });
  }
  next();
});

const PropertyDealer = mongoose.model("PropertyDealer", propertyDealerSchema);

export default PropertyDealer;
