require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Must be before routes!
app.use(cors());
app.use(express.json()); // Required for parsing JSON body

connectDB();

app.use("/api/v1/auth", authRoutes);

//Server uploads folder
app.use("/uploads", express.static(path.join(__dirname,"uploads")));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
