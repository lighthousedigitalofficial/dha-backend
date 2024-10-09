import Joi from "joi";

export const salePropertyValidation = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Please provide a name.",
    "string.base": "Name must be a valid string."
  }),
  cnic: Joi.string().required().messages({
    "any.required": "Please provide your CNIC.",
    "string.base": "CNIC must be a valid string."
  }),
  phone: Joi.string().required().messages({
    "any.required": "Please provide your phone number.",
    "string.base": "Phone number must be a valid string."
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Please provide your email.",
    "string.email": "Please provide a valid email."
  }),
  plotNum: Joi.string().optional().allow(""),
  streetNum: Joi.string().optional().allow(""),
  sector: Joi.string().optional().allow(""),
  size: Joi.string().optional().allow(""),
  phase: Joi.string().optional().allow(""),
  demand: Joi.string().optional().allow(""),
  type: Joi.string().valid("residential", "commercial", "shop", "apartment").required().messages({
    "any.required": "Please select a property type.",
    "any.only": "Property type must be one of 'residential', 'commercial', 'shop', or 'apartment'."
  }),
  document: Joi.string().optional().allow(""),
  status: Joi.string().valid("available", "sold", "pending").default("available").messages({
    "any.only": "Status must be either 'available', 'sold', or 'pending'."
  })
});
