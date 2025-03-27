const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const captionSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [3, "First name must be at least 3 characters long"],
            maxlength: [30, "First name must be less than 30 characters long"],
        },
        lastName: {
            type: String,
            required: true,
            minlength: [3, "Last name must be at least 3 characters long"],
            maxlength: [30, "Last name must be less than 30 characters long"],
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password must be at least 6 characters long"],
        maxlength: [1024, "Password must be less than 1024 characters long"],
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "inactive",
    },
    vehicle: {
        color: {
            type: String,
            required: true,
        },
        plateNumber: {
            type: String,
            required: true,
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "Capacity must be at least 1"],
        },
        vehicleType: {
            type: String,
            enum: ["car", "bike", "auto"],
            required: true,
        },
    },
    location: {
        latitude: {
            type: Number,
        },
        longitude: {
            type: Number,
        },
    },
});

captionSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
    return token;
}

captionSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captionSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

module.exports = mongoose.model("caption", captionSchema);
