import Joi from 'joi';

export const videoValidationSchema = Joi.object({
    url: Joi.string()
        .uri()
        .required()
        .messages({
            'string.base': 'URL should be a string',
            'string.empty': 'URL cannot be empty',
            'any.required': 'URL is a required field'
        }),
    title: Joi.string()
        .min(3)
        .max(100)
        .required()
        .messages({
            'string.base': 'Title should be a string',
            'string.empty': 'Title cannot be empty',
            'string.min': 'Title should be at least 3 characters long',
            'string.max': 'Title should not exceed 100 characters',
            'any.required': 'Title is a required field'
        }),
    mediaId: Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/) 
        .required()
        .messages({
            'string.base': 'Media ID should be a string',
            'string.empty': 'Media ID cannot be empty',
            'string.pattern.base': 'Media ID must be a valid ObjectId',
            'any.required': 'Media ID is a required field'
        }),
});
