const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const rideController = require("../controllers/ride.controller");
const authMiddleware = require("../middlewares/auth.middlewear");

router.post("/create",
    authMiddleware.isUserAuthenticated,
    body("startLocation").notEmpty().withMessage("Start location is required"),
    body("endLocation").notEmpty().withMessage("End location is required"),
    body("vehicleType").isString().isIn(['auto','bike','van','sedan','suv']).withMessage("Vehicle type is required"),
    rideController.createRide
);

module.exports = router