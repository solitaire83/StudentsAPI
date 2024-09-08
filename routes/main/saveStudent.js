const express = require("express");
const router = express.Router();
const readStudents = require("../../funcs/readStudents");
const writeStudents = require("../../funcs/writeStudents");

router.post("/saveStudent", (req, res) => {
  const students = readStudents();
  const studentnou = req.body;
  students.push(studentnou);
  writeStudents(students);
  res.status(201).json(studentnou);
});

module.exports = router;