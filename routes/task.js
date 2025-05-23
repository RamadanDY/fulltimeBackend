const express = require("express");
const router = express.Router();
//1. we import the getAllTask controller here
const {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.js");

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

// dont forget to export the router into the index file
module.exports = router;
