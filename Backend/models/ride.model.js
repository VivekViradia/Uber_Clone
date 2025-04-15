const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
    startLocation: {
        type: String,
        required: true,
    },
    endLocation: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    captionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Caption',
    },
    fare: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending','accepted','ongoing', 'completed', 'cancelled'],
        default: 'pending',
    },
    duration: {
        type: Number,
    },
    distance: {
        type: Number,
    },
    paymentID: {
        type: String,
    },
    orderID: {
        type: String,
    },
    signature: {
        type: String,
    },
    otp: {
        type: String,
        select: false,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('ride', rideSchema);