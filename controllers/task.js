const Task = require("../models/Task");

const getAllTask = async (req, res) => {
  res.json({ id: req.params.id });
};

const createTask = async (req, res) => {
  const task = await Task.create({ name: "first task" });
  res.status(201).json({ task });
};
const updateTask = (req, res) => {
  res.send("update task");
};
const deleteTask = (req, res) => {
  res.send("delete Task");
};

// we export the getAllTask function into the routes task file
module.exports = {
  getAllTask,
  createTask,
  updateTask,
  deleteTask,
};
