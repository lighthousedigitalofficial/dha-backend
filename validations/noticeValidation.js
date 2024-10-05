import Joi from 'joi';

export const noticeValidationSchema = Joi.object({
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
    image: Joi.string()
        .uri()
        .required()
        .messages({
            'string.base': 'Image URL should be a string',
            'string.empty': 'Image URL cannot be empty',
            'any.required': 'Image URL is a required field'
        }),
    description: Joi.string()
        .min(5)
        .max(500)
        .optional()  
        .messages({
            'string.base': 'Description should be a string',
            'string.min': 'Description should be at least 5 characters long',
            'string.max': 'Description should not exceed 500 characters',
        }),
});
