const express = require("express");
const app = express();
const tryout = require("./routes/tryout.js");
const task = require("./routes/task.js");
require("dotenv").config();
require("./db/connect.js");

app.use(express.json());
const PORT = process.env.PORT || 5060;

app.use("/", tryout);
app.use("/api/v1/tasks", task);

// list of routes that we will using
// app.get("/api/v1/tasks");  -- to get all the tasks
// app.post("/api/v1/tasks"); --- to create a new task
// app.get("/api/v1/tasks");  ---- to get specific tasks
// app.patch("/api/v1/tasks");  ---to update tasks
// app.delete("/api/v1/tasks"); ---- to remove tasks

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
