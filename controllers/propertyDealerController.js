import PropertyDealer from "../models/propertyDealerModel.js";
import * as factory from "./handleFactory.js";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../utils/appError.js";
import { checkReferenceId } from "../utils/helpers.js";
import slugify from "slugify";
import Affiliates from "../models/affiliatesModel.js";

export const getAllPropertyDealers = factory.getAll(PropertyDealer);
export const getPropertyDealer = factory.getOne(PropertyDealer);

// Custom createPropertyDealer controller
export const createPropertyDealer = catchAsync(async (req, res, next) => {
  const { agency, fullName, address, phone, affiliateId } = req.body;

  // Validate required fields
  if (!agency || !fullName || !affiliateId) {
    return next(
      new AppError(
        "Please provide all required fields (agency, fullName, affiliateId).",
        400
      )
    );
  }

  // Check if affiliateId is valid
  const isAffiliateValid = await Affiliates.findById(affiliateId);
  if (!isAffiliateValid) {
    return next(new AppError("Invalid affiliate ID", 400));
  }

  // Generate slug from agency name
  const slug = slugify(agency, { lower: true, strict: true }); // Generate slug from agency

  // Create a new property dealer
  const newPropertyDealer = await PropertyDealer.create({
    agency,
    slug,
    fullName,
    address,
    phone,
    affiliateId,
  });

  // Return the created property dealer
  res.status(201).json({
    status: "success",
    data: {
      propertyDealer: newPropertyDealer,
    },
  });
});

export const updatePropertyDealer = factory.updateOne(PropertyDealer);
export const deletePropertyDealer = factory.deleteOne(PropertyDealer);

//
export const getBySlug = factory.getOneBySlug(PropertyDealer);
