import mongoose from "mongoose";

// Utility function to check if a reference ID exists
export const checkReferenceId = async (modelName, id) => {
  const Model = mongoose.model(modelName);
  const exists = await Model.exists({ _id: id });
  return exists;
};

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

// Pre 'find' middleware to auto-populate the affiliateId field
propertyDealerSchema.pre('find', function (next) {
  this.populate({
    path: 'affiliateId',
    select: 'name',
  });
  next();
});

// Create the model
const PropertyDealer = mongoose.model("PropertyDealer", propertyDealerSchema);

export default PropertyDealer;
