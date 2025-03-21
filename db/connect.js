const mongoose = require("mongoose");
require("dotenv").config();

const connectionString = process.env.MongoDB_URL;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
