import Joi from "joi";

// Define the validation schema for PurchaseProperty
export const purchasePropertyValidation = Joi.object({
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
  type: Joi.string().valid("residential", "commercial", "shop", "apartment").required().messages({
    "any.required": "Please select a property type.",
    "any.only": "Property type must be one of 'residential', 'commercial', 'shop', or 'apartment'."
  }),
  phase: Joi.string().optional().allow(""),
  size: Joi.string().optional().allow(""),
  price: Joi.number().required().messages({
    "any.required": "Please provide the price.",
    "number.base": "Price must be a valid number."
  }),
  status: Joi.string().valid("available", "purchased", "pending").default("available").messages({
    "any.only": "Status must be either 'available', 'purchased', or 'pending'."
  })
});
