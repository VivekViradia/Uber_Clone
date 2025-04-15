const mapsService = require("../services/maps.service");
const { validationResult } = require("express-validator");
const CustomError = require("../utils/customError");

module.exports.getAddressCordinatesByAddress = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { address } = req.query;
        const coordinates = await mapsService.getAddressCordinates(address);
        return res.status(200).json({ coordinates, status: "success" });
    } catch (error) {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({
                message: error.message,
                details: error.details,
            });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports.getDistanceTimeByAddress = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { origin, destination } = req.query;
        const distanceTime = await mapsService.getDistanceTime(origin, destination);
        return res.status(200).json({ distanceTime, status: "success" });
    } catch (error) {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({
                message: error.message,
                details: error.details,
            });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports.getAddressSuggestionsByAddress = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { address } = req.query;
        const suggestions = await mapsService.getAddressSuggestions(address);
        return res.status(200).json({ suggestions, status: "success" });
    } catch (error) {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({
                message: error.message,
                details: error.details,
            });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
}