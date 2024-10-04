import Joi from "joi";

export const eventsValidation = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "Please provide a title.",
  }),
  slug: Joi.string().optional(),
  description: Joi.string().required().messages({
    "any.required": "Please provide a description.",
  }),
  images: Joi.array().items(Joi.string()).optional(),
});
