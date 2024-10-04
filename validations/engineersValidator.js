import Joi from "joi";

export const engineersValidation = Joi.object({
  registerNumber: Joi.number().required().messages({
    "any.required": "Please provide a register number.",
  }),
  firmName: Joi.string().required().messages({
    "any.required": "Please provide a firm name.",
  }),
  slug: Joi.string().optional(),
  engineerName: Joi.string().required().messages({
    "any.required": "Please provide an engineer name.",
  }),
  address: Joi.string().optional(),
  phone: Joi.string().optional(),
  status: Joi.string().valid("active", "inactive").default("active"),
  affiliateId: Joi.string().required().messages({
    "any.required": "Please provide an affiliate ID.",
  }),
});
