const captionModel = require("../models/caption.model");

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
        return error
    }

}

