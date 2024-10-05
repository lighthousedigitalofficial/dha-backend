import Media from "../models/mediaModel.js";
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./handleFactory.js";

export const createMedia = async (req, res) => {
    try {
      // Destructure the request body
      const { title, bannerId, slug, description } = req.body;
  
      // Create a new media instance
      const media = new Media({
        title,
        bannerId,
        slug,
        description,
      });
  
      // Save the media instance to the database
      const savedMedia = await media.save();
  
      // Respond with the created media item
      res.status(201).json({
        status: "success",
        data: {
          media: savedMedia,
        },
      });
    } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({
        status: "error",
        message: "An error occurred while creating media.",
        error: error.message,
      });
    }
  };
  
export const getMedias = getAll(Media);

export const getMedia = getOne(Media);

export const updateMedia = updateOne(Media);

export const deleteMedia = deleteOne(Media);
