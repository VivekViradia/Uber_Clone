const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const captionRoutes = require("./routes/caption.routes");
const mapsRoutes = require("./routes/maps.routes");
const rideRoutes = require("./routes/ride.routes");
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
app.use("/maps", mapsRoutes);
app.use("/rides", rideRoutes);

app.get('/', (req, res) => {
    console.log("Hello World");
})

module.exports = app;






