const axios = require("axios");
const CustomError = require("../utils/customError");

module.exports.getAddressCordinates = async (address) => {
    const googleAPIKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${googleAPIKey}`;

    try {
        const response = await axios.get(url);

        if (response.data.status === "OK") {
            const location = response.data.results[0].geometry.location;
            return {
                latitude: location.lat,
                longitude: location.lng,
            }
        } else {
            throw new CustomError(`Geocoding failed: ${response.data.status}`, 400);
        }
    } catch (error) {
        throw new CustomError(`Error fetching coordinates: ${error.message}`, 500);
    }
};

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new CustomError("Origin and destination are required", 400);
    }
    const googleAPIKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${googleAPIKey}`;
    try {
        const response = await axios.get(url);

        if (response.data.status === "OK") {
            const element = response.data.rows[0].elements[0];
            if (element.status === "ZERO_RESULTS") {
                throw new CustomError("No results found for the given origin and destination", 404);
            }
            if (element.status === "OK") {
                return {
                    distance: element.distance.text,
                    duration: element.duration.text,
                };
            } else {
                throw new CustomError(`Unable to fetch distance and time: ${element.status}`, 400);
            }
        } else {
            throw new CustomError(`Unable to fetch distance and time: ${response.data.status}`, 400);
        }


    } catch (error) {
        throw new CustomError(`Error fetching distance and time: ${error.message}`, 500);
    }
}

module.exports.getAddressSuggestions = async (address) => {
    if (!address) {
        throw new CustomError("Address is required", 400);
    }
    const googleAPIKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(address)}&key=${googleAPIKey}`;
    try {
        const response = await axios.get(url);
        if (response.data.status === "OK") {
            return response.data.predictions.map(prediction => prediction.description).filter(value => value);
        } else {
            throw new CustomError(`Unable to fetch address suggestions: ${response.data.status}`, 400);
        }
    } catch (error) {
        throw new CustomError(`Error fetching address suggestions: ${error.message}`, 500);
    }
}