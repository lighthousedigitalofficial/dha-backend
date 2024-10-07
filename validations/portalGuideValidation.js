import Joi from "joi";

export const portalGuideValidation = Joi.object({
	title: Joi.string().required().messages({
		"any.required": "Please provide a title.",
		"string.base": "Title must be a valid string.",
	}),
	content: Joi.string().required().messages({
		"any.required": "Please provide content.",
		"string.base": "Content must be a valid string.",
	}),
	author: Joi.string().required().messages({
		"any.required": "Please provide the author's name.",
		"string.base": "Author's name must be a valid string.",
	}),
	video: Joi.string().required().messages({
		"any.required": "Please provide Video.",
		"string.base": "Video must be a valid string.",
	}),
	status: Joi.string().valid("published", "draft").default("draft").messages({
		"string.base": "Status must be a valid string.",
		"any.only": "Status must be either 'published' or 'draft'.",
	}),
});
