import Joi from "joi";

export const affiliatesValidation = Joi.object({
	name: Joi.string().required().messages({
		"any.required": "Please provide a name.",
	}),
	slug: Joi.string().optional(),
	status: Joi.string().valid("active", "inactive").default("active"),
});
