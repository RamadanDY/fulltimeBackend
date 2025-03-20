// this is where we write our logic and the send it inside our routes file

// this is a controller that is used get all the tasks

const getAllTask = (req, res) => {
  res.json({ id: req.params.id });
};

const createTask = (req, res) => {
  res.json(req.body);
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
