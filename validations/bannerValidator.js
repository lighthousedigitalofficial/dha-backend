import Joi from "joi";

export const bannerValidationSchema = Joi.object({
	type: Joi.string().valid("image", "video").required().messages({
		"any.only": "Type must be either image or video",
		"any.required": "Type is a required field",
	}),
	mediaUrl: Joi.string().uri().required().messages({
		"string.base": "Media URL should be a string",
		"string.empty": "Media URL cannot be empty",
		"any.required": "Media URL is a required field",
	}),
	title: Joi.string().min(3).max(100).required().messages({
		"string.base": "Title should be a string",
		"string.empty": "Title cannot be empty",
		"string.min": "Title should be at least 3 characters long",
		"string.max": "Title should not exceed 100 characters",
		"any.required": "Title is a required field",
	}),
	description: Joi.string().min(5).max(500).required().messages({
		"string.base": "Description should be a string",
		"string.empty": "Description cannot be empty",
		"string.min": "Description should be at least 5 characters long",
		"string.max": "Description should not exceed 500 characters",
		"any.required": "Description is a required field",
	}),
	status: Joi.string().valid("active", "inactive").default("active").messages({
		"any.only": "Status must be either active or inactive",
	}),
});
