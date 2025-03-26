const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.isAuthenticated = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1] || req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const isBlacklisted = await blacklistTokenModel.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET, { expiresIn: '24h' });
        req.user = await userModel.findById(decoded.id);

        return next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }
}
