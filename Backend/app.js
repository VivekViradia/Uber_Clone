const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const captionRoutes = require("./routes/caption.routes");
const cookieParser = require("cookie-parser");
const app = express();
const connectDB = require("./db/db");
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/user", userRoutes);
app.use("/caption", captionRoutes);
app.get('/', (req, res) => {
    console.log("Hello World");
})

module.exports = app;






