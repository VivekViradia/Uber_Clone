const captionModel = require("../models/caption.model");
const { validationResult } = require("express-validator");
const captionService = require("../services/caption.servics");
const CustomError = require("../utils/customError");

module.exports.registerCaption = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) { 
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullName, email, password, vehicle, location } = req.body;
    const { color, plateNumber, capacity, vehicleType } = vehicle;

    try {
        const existingCaption = await captionModel.findOne({ email });
        if (existingCaption) {
            return res.status(400).json({ message: "Caption already exists" });
        }
        
        const caption = await captionService.createCaption({
            fullName,
            email,
            password,
            vehicle: {
                color,
                plateNumber,
                capacity,
                vehicleType
            },
            location: location ? location : {
                longitude: 0,
                latitude: 0
            },
        });
        const token = caption.generateAuthToken();

        res.status(201).json({ message: "Caption created successfully", token, caption });
    } catch (error) {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({
                message: error.message,
                details: error.details, // Include validation errors in the response
            });
        }
        res.status(500).json({ message: "Error creating caption", error: error.message });
    }
}

module.exports.loginCaption = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(401).json({ message: "Invalid email or password" })
    }
    const { email, password } = req.body;
    const caption = await captionModel.findOne({ email }).select("+password");
    if (!caption) {
        return res.status(401).json({ message: "Invalid email or password" })
    }
    const isMatch = await caption.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" })
    }
    const token = caption.generateAuthToken();
    res.cookie("token", token);
    res.status(200).json({ message: "Login successful", token });
}

module.exports.getProfile = async (req, res) => {
    res.status(200).json({ message: "Profile fetched successfully", caption: req.caption });
}

module.exports.logoutCaption = async (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Logout successful" });
}

