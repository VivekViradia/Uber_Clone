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
    captionId: {
        type: Number,
        unique: true,
        max: [99999, "Caption ID must be at most 5 digits"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please enter a valid email address"
        ]
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
            enum: ["bike", "auto","sedan","suv",'van'],
            required: true,
        },
    },
    location: {
        latitude: Number,
        longitude: Number,
    },
});

// 🔁 Auto-increment captionId before saving
captionSchema.pre("save", async function (next) {
    if (!this.isNew) return next();

    try {
        const last = await this.constructor.findOne().sort("-captionId").exec();
        this.captionId = last?.captionId ? last.captionId + 1 : 10001;
        next();
    } catch (err) {
        next(err);
    }
});

// 🔐 Auto-hash password before saving
captionSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    try {
        this.password = await this.constructor.hashPassword(this.password);
        next();
    } catch (err) {
        next(err);
    }
});

// 🔐 JWT Token Generator
captionSchema.methods.generateAuthToken = function () {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
};

// 🔑 Compare raw vs hashed password
captionSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// 🔑 Hash password utility
captionSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

const captionModel = mongoose.model("Caption", captionSchema);
module.exports = captionModel;
