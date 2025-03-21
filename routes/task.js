const express = require("express");
const router = express.Router();
//1. we import the getAllTask controller here
const {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.js");
// 2.and we get the tasks here
// Defines the routes and associates them with the appropriate controller functions.

// 3. we define the routes here
//A client sends a GET request to /api/v1/tasks to retrieve all tasks.

// A client sends a POST request to /api/v1/tasks with a JSON body (e.g., { "title": "Learn Node.js", "description": "Complete the tutorial" }) to create a new task
// Path: /:id (dynamic path with an id parameter)

// Methods:

// GET /:id: Fetches a specific task by its ID.

// PATCH /:id: Updates a specific task by its ID.

// DELETE /:id: Deletes a specific task by its ID.

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getAllTask).patch(updateTask).delete(deleteTask);

// dont forget to export the router into the index file
module.exports = router;
