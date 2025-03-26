const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.isAuthenticated = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1] || req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findById(decoded.id);

        return next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}
