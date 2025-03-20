const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/tasks"; // ✅ Removed extra space

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err); // ✅ Better error handling
  });
