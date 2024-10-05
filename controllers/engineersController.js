import Engineers from "../models/engineersModel.js";
import * as factory from "./handleFactory.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import Affiliates from "../models/affiliatesModel.js";
import slugify from 'slugify'; // Import slugify

export const getAllEngineers = factory.getAll(Engineers);
export const getEngineers = factory.getOne(Engineers);

// Custom createEngineers controller
export const createEngineers = catchAsync(async (req, res, next) => {
    const { registerNumber, firmName, engineerName, address, phone, status, affiliateId } = req.body;
  
    // Validate required fields
    if (!registerNumber || !firmName || !engineerName || !affiliateId) {
      return next(new AppError("Please provide all required fields (registerNumber, firmName, engineerName, affiliateId).", 400));
    }
  
    // Ensure affiliateId exists in the Affiliates collection
    const affiliateExists = await Affiliates.findById(affiliateId);
    if (!affiliateExists) {
      return next(new AppError("Invalid affiliateId. Affiliate does not exist.", 404));
    }
  
    // Generate slug from firmName
    const slug = slugify(firmName, { lower: true, strict: true }); // Generate a slug from firmName
  
    // Create a new engineer
    const newEngineer = await Engineers.create({
      registerNumber,
      firmName,
      slug, // Use the generated slug
      engineerName,
      address,
      phone,
      status,
      affiliateId,
    });
  
    // Return the created engineer
    res.status(201).json({
      status: "success",
      data: {
        engineer: newEngineer,
      },
    });
  });

export const updateEngineers = factory.updateOne(Engineers);
export const deleteEngineers = factory.deleteOne(Engineers);

export const getBySlug = factory.getOneBySlug(Engineers);
