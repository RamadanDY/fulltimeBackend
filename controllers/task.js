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
  // to get specific tasks
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task)
      return res.status(404).json({ msg: `no task with ID :${taskID}` });
    res.json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteTask = (req, res) => {
  res.send("delete Task");
};

// we export the getAllTask function into the routes task file
module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};

// The code snippet you provided is a **controller function** named `createTask`. It is responsible for handling the creation of a new task in a task management application. Let’s break it down step by step:

// ---

// ### Code Breakdown

// ```javascript
// const createTask = async (req, res) => {
//   const task = await Task.create({ name: "first task" });
//   res.status(201).json({ task });
// };
// ```

// ---

// ### 1. **Function Definition**

// ```javascript
// const createTask = async (req, res) => { ... }
// ```

// - **Purpose**: Defines an asynchronous function named `createTask`.
// - **Parameters**:
//   - `req`: The request object, which contains data sent by the client (e.g., request body, query parameters, headers).
//   - `res`: The response object, used to send data back to the client.
// - **Explanation**:
//   - The function is marked as `async` because it performs asynchronous operations (e.g., interacting with the database).

// ---

// ### 2. **Create a New Task**

// ```javascript
// const task = await Task.create({ name: "first task" });
// ```

// - **Purpose**: Creates a new task in the database.
// - **Explanation**:
//   - `Task.create()` is a Mongoose method that creates a new document in the `tasks` collection.
//   - The argument `{ name: "first task" }` is the data for the new task. In this case, the task will have a `name` field with the value `"first task"`.
//   - The `await` keyword is used to wait for the database operation to complete before moving to the next line.
//   - The result of the operation (the newly created task) is stored in the `task` variable.

// ---

// ### 3. **Send Response**

// ```javascript
// res.status(201).json({ task });
// ```

// - **Purpose**: Sends a response back to the client.
// - **Explanation**:
//   - `res.status(201)`: Sets the HTTP status code to `201`, which means "Created". This status code is typically used when a new resource is successfully created.
//   - `.json({ task })`: Sends a JSON response containing the newly created task. The `task` object is wrapped in another object (`{ task }`) for better structure.

// ---

// ### Full Explanation

// This function is designed to handle a `POST` request to create a new task. Here’s how it works:

// 1. **Client Sends a Request**:
//    - The client sends a `POST` request to the server, typically with a JSON body containing the task data (e.g., `{ "name": "first task" }`).

// 2. **Server Handles the Request**:
//    - The `createTask` function is invoked.
//    - It uses the `Task.create()` method to insert a new task into the database.
//    - The `await` keyword ensures the function waits for the database operation to complete.

// 3. **Server Sends a Response**:
//    - Once the task is created, the server sends a `201 Created` response with the newly created task in the response body.

// ---

// ### Example Workflow

// #### 1. **Client Request**
// - **Method**: `POST`
// - **URL**: `/api/v1/tasks`
// - **Body**:
//   ```json
//   {
//     "name": "first task"
//   }
//   ```

// #### 2. **Server Action**
// - The `createTask` function is called.
// - A new task is created in the database with the data `{ name: "first task" }`.

// #### 3. **Server Response**
// - **Status Code**: `201 Created`
// - **Body**:
//   ```json
//   {
//     "task": {
//       "_id": "64f1b2c8e4b0a1a2b3c4d5e6",
//       "name": "first task",
//       "completed": false,
//       "createdAt": "2023-09-03T12:34:56.789Z",
//       "__v": 0
//     }
//   }
//   ```

// ---

// ### Improvements

// The current implementation hardcodes the task name (`"first task"`). In a real-world scenario, you would typically use data from the request body. Here’s an improved version:

// #### Improved Code

// ```javascript
// const createTask = async (req, res) => {
//   const { name } = req.body; // Extract the task name from the request body
//   const task = await Task.create({ name }); // Create a new task with the provided name
//   res.status(201).json({ task }); // Send the created task as a response
// };
// ```

// - **Explanation**:
//   - The task name is now dynamically taken from the request body (`req.body.name`).
//   - This makes the function more flexible and reusable.

// ---

// ### Key Points

// 1. **Asynchronous Operations**:
//    - The function uses `async/await` to handle asynchronous database operations.
// 2. **Database Interaction**:
//    - The `Task.create()` method is used to insert a new document into the `tasks` collection.
// 3. **Response Handling**:
//    - The server sends a `201 Created` status code and the newly created task as a JSON response.
// 4. **Flexibility**:
//    - The function can be improved to dynamically use data from the request body.

// ---

// ### Summary

// The `createTask` function is a simple yet powerful controller that handles the creation of a new task. It interacts with the database using Mongoose, waits for the operation to complete, and sends an appropriate response to the client. This pattern is commonly used in RESTful APIs to handle resource creation.
