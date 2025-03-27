const captionModel = require("../models/caption.model");

module.exports.createCaption = async ({fullName, email, password, vehicle, location}) => {
    const { firstName, lastName } = fullName;
    if(!firstName || !lastName || !email || !password || !vehicle) {
        throw new Error("All fields are required");
    }
    const captionDetails = new captionModel({
        fullName,
        email,
        password,
        vehicle,
        location,
    });
    return captionDetails;
}

