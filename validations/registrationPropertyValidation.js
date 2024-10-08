import Joi from "joi";

// Define the validation schema for RegistrationProperty
export const registrationPropertyValidation = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Please provide a name.",
    "string.base": "Name must be a valid string."
  }),
  phone: Joi.string().required().messages({
    "any.required": "Please provide your phone number.",
    "string.base": "Phone number must be a valid string."
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Please provide your email.",
    "string.email": "Please provide a valid email."
  }),
  country: Joi.string().optional().allow(""),
  requirement: Joi.string().valid("residential", "commercial", "shop", "apartment", "house").required().messages({
    "any.required": "Please select a property requirement.",
    "any.only": "Requirement must be one of 'residential', 'commercial', 'shop', 'apartment', or 'house'."
  }),
  phase: Joi.string().optional().allow(""),
  size: Joi.string().optional().allow(""),
  budget: Joi.number().required().messages({
    "any.required": "Please provide a budget/price.",
    "number.base": "Budget must be a valid number."
  }),
  remarks: Joi.string().optional().allow(""),
  status: Joi.string().valid("pending", "approved", "rejected").default("pending").messages({
    "any.only": "Status must be either 'pending', 'approved', or 'rejected'."
  })
});
