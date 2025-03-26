const userModel = require("../models/user.model");
const userService = require("../services/user.servics");
const { validationResult } = require("express-validator");


module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullName, email, password } = req.body;
    const hashedPassword = await userModel.hashPassword(password);
    const user = await userService.createUser({ fullName, email, password: hashedPassword });
    const token = user.generateToken();
    res.status(201).json({ user, token });
};

module.exports.loginUser = async (req, res, next) => {
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
}


module.exports.getUserProfile = async (req, res, next) => {
    res.status(200).json({ user: req.user });
}

