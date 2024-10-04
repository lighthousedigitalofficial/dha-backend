import Joi from "joi";

export const propertyDealerValidation = Joi.object({
  agency: Joi.string().required().messages({
    "any.required": "Please provide an agency name.",
  }),
  slug: Joi.string().optional(),
  fullName: Joi.string().required().messages({
    "any.required": "Please provide a full name.",
  }),
  address: Joi.string().required().messages({
    "any.required": "Please provide an address.",
  }),
  phone: Joi.string().optional(),
  affiliateId: Joi.string().required().messages({
    "any.required": "Please provide an affiliate ID.",
  }),
});
