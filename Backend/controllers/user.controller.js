const userModel = require("../models/user.model");
const userService = require("../services/user.servics");
const { validationResult } = require("express-validator");
const blacklistTokenModel = require("../models/blacklistToken.model");
const CustomError = require("../utils/customError");

module.exports.registerUser = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { fullName, email, password } = req.body;
        const user = await userService.createUser({ fullName, email, password });
        const token = user.generateToken();
        res.status(201).json({ user, token });

    } catch (error) {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({
                message: error.message,
                details: error.details, // Include validation errors in the response
            });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports.loginUser = async (req, res, next) => {
    try {
        // Check if the user is already logged in
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        const user = await userModel.findOne({ email }).select("+password");
        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const token = user.generateToken();
        res.cookie("token", token);
        res.status(200).json({ user, token });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}


module.exports.getUserProfile = async (req, res, next) => {
    try {
        // Check if the user is already logged in
        res.status(200).json({ user: req.user });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

module.exports.logoutUser = async (req, res, next) => {
    try {
        res.clearCookie("token");
        const token = req.cookies.token || req.headers.authorization.split(" ")[1];
        await blacklistTokenModel.create({ token });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
}

