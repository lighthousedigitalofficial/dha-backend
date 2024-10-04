import Joi from "joi";

export const facilitiesValidation = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Please provide a title.",
  }),
  slug: Joi.string().optional(),
  description: Joi.string().required().messages({
    "any.required": "Please provide a description.",
  }),
  mainImage: Joi.string().required().messages({
    "any.required": "Please provide a main image.",
  }),
  images: Joi.array().items(Joi.string()).optional(),
  services: Joi.array().items(Joi.string().required()).required().messages({
    "any.required": "Please provide services.",
  }),
  link: Joi.string().optional(),
});
