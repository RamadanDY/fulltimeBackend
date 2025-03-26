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

router.route("/").get(getAllTask).post(createTask).get(getTask);
router
  .route("/:id")
  .get(getAllTask)
  .patch(updateTask)
  .delete(deleteTask)
  .get(getTask);

// dont forget to export the router into the index file
module.exports = router;
