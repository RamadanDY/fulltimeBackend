const express = require("express");
const router = express.Router();

const objlist = {
  name: "kofi",
  age: 33,
  number: 433322,
};

// the list of routes that we will be using
router.get("");

// router.get("/books", (req, res) => {
//   res.send(objlist.name);
// });

module.exports = router;
