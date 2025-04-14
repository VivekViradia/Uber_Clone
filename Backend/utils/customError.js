class CustomError extends Error {
    constructor(message, statusCode, details = null) {
        super(message);
        this.statusCode = statusCode;
        this.details = details; // Add details for validation errors
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = CustomError;