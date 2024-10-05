import mongoose from 'mongoose';
import { checkReferenceId } from "../utils/helpers.js";


const mediaSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title."],
    },
    bannerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Banner',
      required: [true, "Please provide a banner ID."],
    },
    slug: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
      required: [true, "Please provide a description."],
    },
  },
  {
    timestamps: true,
  }
);

// Pre 'find' middleware to auto-populate the bannerId field
mediaSchema.pre('find', function (next) {
  this.populate({
    path: 'bannerId',
    select: 'title',
  });
  next();
});

// Pre 'save' middleware to check if bannerId exists before saving
mediaSchema.pre('save', async function (next) {
  await checkReferenceId('Banner', this.bannerId, next); // Use your checkReferenceId function
  next();
});

// Create the model
const Media = mongoose.model('Media', mediaSchema);

export default Media;
