import Joi from "joi";

// Define the validation schema for Team
export const teamValidation = Joi.object({
  name: Joi.string().required().messages({
    "any.required": "Please provide a name.",
    "string.base": "Name must be a valid string."
  }),
  designation: Joi.string().required().messages({
    "any.required": "Please provide a designation.",
    "string.base": "Designation must be a valid string."
  }),
  extn: Joi.string().required().messages({
    "any.required": "Please provide an extension number.",
    "string.base": "Extension number must be a valid string."
  }),
  status: Joi.string().valid("active", "inactive").default("active").messages({
    "any.only": "Status must be either 'active' or 'inactive'."
  })
});
