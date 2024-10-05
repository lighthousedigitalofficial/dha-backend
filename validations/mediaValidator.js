import Joi from "joi";

export const mediaValidationSchema = Joi.object({
  title: Joi.string()
    .required()
    .messages({
      "any.required": "Please provide a title.",
    }),
  bannerId: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      "any.required": "Please provide the Banner ID.",
      "string.pattern.base": "Banner ID must be a valid MongoDB ObjectId.",
    }),
  slug: Joi.string().optional(),
  description: Joi.string()
    .required()
    .messages({
      "any.required": "Please provide a description.",
    }),
});
