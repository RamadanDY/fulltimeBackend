const Task = require("../models/Task");

const getAllTask = async (req, res) => {
  // res.json({ id: req.params.id });
  try {
    // lets get all the tasks from the db
    const tasks = await Task.find({});
    // we send the json data that we get from the db to the client
    res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    // Extract the name from the request body
    const { name } = req.body;

    // Create a new task with the extracted name
    const task = await Task.create({ name });
    if (!task) console.log("not saved ");

    // Send a success response with the created task
    //the res is used to send data to the client back
    res.status(201).json({ task });
  } catch (error) {
    // Handle errors and send an appropriate response
    res.status(500).json({ error: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    // extracts the id from the req.params and renames it as taskID
    const { id: taskID } = req.params;
    // we use the findOne method in mongoose to search for task using the _id
    const task = await Task.findOne({ _id: taskID });
    if (!task)
      return res.status(404).json({ msg: `no task with ID :${taskID}` });
    res.json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    // lets extract the id from the req.params when the req is sent through the http and rename it as taskID
    const { id: taskID } = req.params;

    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runvalidators: true,
    });

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteTask = async (req, res) => {
  try {
    // to get the id from the header params  and rename it as taskID
    const { id: taskID } = req.params;
    //we now search through the db to find id that we get from the user and save it in the taskID
    // note that its _id because we search through the db that
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `no task with id:  ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// we export the getAllTask function into the routes task file
module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
