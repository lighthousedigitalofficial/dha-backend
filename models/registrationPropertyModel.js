import mongoose from 'mongoose'

const registrationPropertySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name.'],
        },
        phone: {
            type: String,
            required: [true, 'Please provide your phone number.'],
        },
        email: {
            type: String,
            required: [true, 'Please provide your email.'],
        },
        country: String,
        requirement: {
            type: String,
            enum: ['residential', 'commercial', 'shop', 'apartment', 'house'],
            required: true,
        },
        phase: String,
        size: String,
        budget: {
            type: Number,
            required: [true, 'Please provide a budget/price.'],
        },
        remarks: String,
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending',
        },
    },
    {
        timestamps: true,
    }
)

const RegistrationProperty = mongoose.model(
    'RegistrationProperty',
    registrationPropertySchema
)

export default RegistrationProperty
