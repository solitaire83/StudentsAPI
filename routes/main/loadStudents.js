const express = require("express");
const router = express.Router();
const readStudents = require("../../funcs/readStudents");

router.get("/loadStudents", (req, res) => {
  const students = readStudents();
  res.json(students);
});

module.exports = router;