import Joi from "joi";

export const activityValidation = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Please provide a title.",
    "string.base": "Title must be a valid string."
  }),
  description: Joi.string().required().messages({
    "any.required": "Please provide a description.",
    "string.base": "Description must be a valid string."
  }),
  images: Joi.array().items(
    Joi.string().uri().messages({
      "string.uri": "Each image must be a valid URL.",
      "string.base": "Each image must be a valid string URL."
    })
  ).optional(),
  videos: Joi.array().items(
    Joi.string().uri().messages({
      "string.uri": "Each video must be a valid URL.",
      "string.base": "Each video must be a valid string URL."
    })
  ).optional(),
  bannerId: Joi.string().optional().messages({
    "string.base": "Banner ID must be a valid string."
  }),
 
  status: Joi.string().valid("active", "inactive").optional().messages({
    "string.base": "Status must be a valid string.",
    "any.only": "Status must be either 'active' or 'inactive'."
  })
});
