import Media from "../models/mediaModel.js";
import slugify from "slugify";
import {
  deleteOne,
  getAll,
  getOne,
  updateOne,
  getOneBySlug,
} from "./handleFactory.js";

export const createMedia = async (req, res) => {
    try {
      const { title, bannerId, slug, description } = req.body;
  
      // Generate slug from title if not provided
      const mediaSlug = slug || slugify(title, { lower: true });
  
      const media = new Media({
        title,
        bannerId,
        slug: mediaSlug, // Use generated slug
        description,
      });
  
      const savedMedia = await media.save();
  
      res.status(201).json({
        status: "success",
        data: {
          media: savedMedia,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        message: "An error occurred while creating media.",
        error: error.message,
      });
    }
  };

export const getMedias = getAll(Media);
export const getMedia = getOne(Media);
export const getMediaBySlug = getOneBySlug(Media);
export const updateMedia = updateOne(Media);
export const deleteMedia = deleteOne(Media);

// New function to update the media status
export const updateMediaStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // Assuming you send the new status in the request body

    // Find the media by ID and update its status
    const updatedMedia = await Media.findByIdAndUpdate(
      id,
      { status }, // Update the status field
      { new: true, runValidators: true } // Return the updated document and run validators
    );

    if (!updatedMedia) {
      return res.status(404).json({
        status: "error",
        message: "Media not found.",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        media: updatedMedia,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while updating the media status.",
      error: error.message,
    });
  }
};
