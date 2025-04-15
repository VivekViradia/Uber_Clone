const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');

module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { startLocation, endLocation, userId, vehicleType } = req.body;

        // Validate input
        if (!startLocation || !endLocation || !vehicleType) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new ride
        const newRide = await rideService.createRide({
            startLocation,
            endLocation,
            userId:req.user._id,
            vehicleType
        });

        return res.status(201).json(newRide);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
}