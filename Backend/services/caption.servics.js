const captionModel = require("../models/caption.model");
const CustomError = require("../utils/customError");

module.exports.createCaption = async ({ fullName, email, password, vehicle, location }) => {
    try {
        const { firstName, lastName } = fullName;
        const { color, plateNumber, capacity, vehicleType } = vehicle;
        if (!firstName || !lastName || !email || !password || !color || !plateNumber || !capacity || !vehicleType) {
            throw new Error("All fields are required");
        }
        const captionDetails = await captionModel.create({
            fullName,
            email,
            password,
            vehicle: { color, plateNumber, capacity, vehicleType },
            // location,
        });

        return captionDetails;
    } catch (error) {
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

        // Re-throw other errors
        throw new CustomError(error.message || "Internal Server Error", 500);
    }

}

