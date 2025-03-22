const mongoose = require("mongoose");
// A model is a JavaScript class that represents a collection in MongoDB.

// A Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.
const TaskSchema = new mongoose.Schema({
  // 1. we define the schema here
  name: {
    type: String,
    required: [true, "Please provide a name"],
    trim: true,
    maxlength: [20, "Name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
