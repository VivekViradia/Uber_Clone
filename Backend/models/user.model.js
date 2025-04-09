const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minLength: [3, "First name must be at least 3 characters long"],
        },
        lastName: {
            type: String,
            required: true,
            minLength: [3, "Last name must be at least 3 characters long"],
        },
    },
    userId: {
        type: Number,
        unique: true,
        max: [99999, "Caption ID must be at most 5 digits"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, "Email must be at least 3 characters long"],
        match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
});

// 🔁 Auto-increment captionId before saving
userSchema.pre("save", async function (next) {
    if (!this.isNew) return next();

    try {
        const last = await this.constructor.findOne().sort("-userId").exec();
        this.userId = last?.userId ? last.userId + 1 : 10001;
        next();
    } catch (err) {
        next(err);
    }
});

// 🔐 Auto-hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    try {
        this.password = await this.constructor.hashPassword(this.password);
        next();
    } catch (err) {
        next(err);
    }
});

userSchema.methods.generateToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET);
};

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
