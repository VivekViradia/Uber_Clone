const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middlewear");


router.post("/register", [
    body("fullName.firstName").isLength({min:3}).withMessage("First name must be at least 3 characters long"),
    body("fullName.lastName").isLength({min:3}).withMessage("Last name must be at least 3 characters long"),
    body("email").isEmail().notEmpty().withMessage("Email is required"),
    body("password").isLength({ min: 6 }).notEmpty().withMessage("Password must be at least 6 characters long"),
], userController.registerUser);

router.post("/login", [
    body("email").isEmail().notEmpty().withMessage("Email is required"),
    body("password").isLength({ min: 6 }).notEmpty().withMessage("Password must be at least 6 characters long"),
], userController.loginUser);

router.get("/profile",authMiddleware.isAuthenticated, userController.getUserProfile);

module.exports = router;
