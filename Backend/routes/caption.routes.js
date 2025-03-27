const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captionController = require("../controllers/caption.controller");
const authMiddleware = require("../middlewares/auth.middlewear");


router.post("/register", [
    body("fullName.firstName").isLength({ min: 3 }).withMessage("First name must be at least 3 characters long"),
    body("fullName.lastName").isLength({ min: 3 }).withMessage("Last name must be at least 3 characters long"),
    body("email").isEmail().notEmpty().withMessage("Email is required"),
    body("password").isLength({ min: 6 }).notEmpty().withMessage("Password must be at least 6 characters long"),
    body("vehicle.color").notEmpty().withMessage("Color is required"),
    body("vehicle.plateNumber").notEmpty().withMessage("Plate number is required"),
    body("vehicle.capacity").isInt({ min: 1 }).withMessage("Capacity must be at least 1"),
    body("vehicle.vehicleType").notEmpty().withMessage("Vehicle type is required"),
], captionController.registerCaption);

router.post("/login", [
    body("email").isEmail().notEmpty().withMessage("Email is required"),
    body("password").notEmpty().withMessage("Password is required"),
], captionController.loginCaption);

router.get("/profile", authMiddleware.isCaptionAuthenticated, captionController.getProfile);

router.post("/logout", authMiddleware.isCaptionAuthenticated, captionController.logoutCaption);

module.exports = router;
