const rideModel = require('../models/ride.model');
const mapsService = require('../services/maps.service');
const CustomError = require('../utils/customError');

async function calculateFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new CustomError("Pickup and destination locations are required", 400);
    }
    // Get coordinates for pickup and destination addresses
    const distanceTime = await mapsService.getDistanceTime(pickup, destination);
    if (!distanceTime) {
        throw new CustomError("Unable to calculate distance and duration", 500);
    }
    // Extract numeric values from distance and duration
    const distance = parseFloat(distanceTime.distance.replace(" km", ""));
    const duration = parseFloat(distanceTime.duration.replace(" mins", ""));
    // Define fare rates for different vehicle types
    const fareRates = {
        auto: { baseFare: 20, costPerKm: 10, costPerMinute: 1 },
        bike: { baseFare: 15, costPerKm: 8, costPerMinute: 0.5 },
        sedan: { baseFare: 50, costPerKm: 15, costPerMinute: 2 },
        suv: { baseFare: 70, costPerKm: 20, costPerMinute: 3 },
        van: { baseFare: 100, costPerKm: 25, costPerMinute: 4 }
    };

    // Calculate fare for each vehicle type
    const vehicleFares = {
        auto: fareRates.auto.baseFare + (fareRates.auto.costPerKm * distance) + (fareRates.auto.costPerMinute * duration),
        bike: fareRates.bike.baseFare + (fareRates.bike.costPerKm * distance) + (fareRates.bike.costPerMinute * duration),
        sedan: fareRates.sedan.baseFare + (fareRates.sedan.costPerKm * distance) + (fareRates.sedan.costPerMinute * duration),
        suv: fareRates.suv.baseFare + (fareRates.suv.costPerKm * distance) + (fareRates.suv.costPerMinute * duration),
        van: fareRates.van.baseFare + (fareRates.van.costPerKm * distance) + (fareRates.van.costPerMinute * duration)
    }
    return vehicleFares;
}

module.exports.createRide = async ({ startLocation, endLocation, userId, vehicleType }) => {
    try {
        // Validate input
        if (!startLocation || !endLocation || !userId || !vehicleType) {
            return res.status(400).json({ message: "All fields are required" });
        }
        // Calculate fare based on distance and duration
        const fare = await calculateFare(startLocation, endLocation);

        // Create a new ride
        const newRide = await rideModel.create({
            startLocation,
            endLocation,
            userId,
            fare: fare[vehicleType] // Use the fare for the selected vehicle type
        });

        return res.status(201).json(newRide);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

