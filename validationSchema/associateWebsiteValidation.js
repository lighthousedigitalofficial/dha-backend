import Joi from 'joi';

export const associateWebsiteValidationSchema = Joi.object({
    logo: Joi.string()
        .uri()
        .required()
        .messages({
            'string.base': 'Logo should be a string',
            'string.empty': 'Logo cannot be empty',
            'any.required': 'Logo is a required field',
            'string.uri': 'Logo must be a valid URL'
        }),
    link: Joi.string()
        .uri()
        .required()
        .messages({
            'string.base': 'Link should be a string',
            'string.empty': 'Link cannot be empty',
            'any.required': 'Link is a required field',
            'string.uri': 'Link must be a valid URL'
        }),
    status: Joi.string()
        .valid('active', 'inactive')
        .default('active')
        .messages({
            'any.only': 'Status must be either active or inactive'
        }),
});
