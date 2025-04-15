const userModel = require("../models/user.model");
const CustomError = require("../utils/customError");

module.exports.createUser = async ({ fullName, email, password }) => {
    try {
        const { firstName, lastName } = fullName;
        if (!firstName || !lastName || !email || !password) {
            throw new CustomError("All fields are required", 400);
        }
        const user = await userModel.create({ fullName, email, password });

        return user;
    } catch (error) {
        
        // Handle validation errors from Mongoose
        if (error.name === 'ValidationError') {
            const validationErrors = {};

            // Extract specific validation error messages
            for (const field in error.errors) {
                validationErrors[field] = error.errors[field].message;

                // Special handling for enum errors
                if (error.errors[field].kind === 'enum') {
                    const enumValues = error.errors[field].properties.enumValues;
                    validationErrors[field] = `Invalid value. Allowed values are: ${enumValues.join(', ')}`;
                }
            }
            console.log('validationErrors', validationErrors);
            throw new CustomError("Validation failed", 400, validationErrors);
        }

        // Handle duplicate key error (e.g., email already exists)
        if (error.code === 11000) {
            throw new CustomError("Email already exists. Please use a different email.", 400);
        }

        // Re-throw other errors
        throw new CustomError(error.message || "Internal Server Error", 500);
    }

};
