const express = require("express");
const router = express.Router();
const mapsController = require("../controllers/maps.controller");
const authMiddleware = require("../middlewares/auth.middlewear");
const { query } = require("express-validator");

router.get("/getAddressCordinates",
    query('address').isString().isLength({ min: 3 }),
    authMiddleware.isUserAuthenticated,
    mapsController.getAddressCordinatesByAddress);

router.get("/getDistanceTime",
    query('origin').isString().isLength({ min: 3 }),
    query('destination').isString().isLength({ min: 3 }),
    authMiddleware.isUserAuthenticated,
    mapsController.getDistanceTimeByAddress);

router.get("/getAddressSuggestions",
    query('address').isString().isLength({ min: 3 }),
    authMiddleware.isUserAuthenticated,
    mapsController.getAddressSuggestionsByAddress);

module.exports = router;