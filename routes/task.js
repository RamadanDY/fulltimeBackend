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
router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getAllTask).patch(updateTask).delete(deleteTask);

// dont forget to export the router into the index file
module.exports = router;
