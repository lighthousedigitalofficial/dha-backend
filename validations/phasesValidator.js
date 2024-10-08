import Joi from "joi";

export const phasesValidation = Joi.object({
	title: Joi.string().required().messages({
		"any.required": "Please provide a title.",
	}),
	description: Joi.string().required().messages({
		"any.required": "Please provide a description.",
	}),
	location: Joi.string().required().messages({
		"any.required": "Please provide a location.",
	}),
	images: Joi.array().items(Joi.string()).optional(),
	videos: Joi.array().items(Joi.string()).optional(),
	services: Joi.array().items(Joi.string().required()).required().messages({
		"any.required": "Please provide services.",
	}),
	type: Joi.string().optional(),
});
