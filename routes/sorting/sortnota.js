const express = require("express");
const router = express.Router();
const readStudents = require("../../funcs/readStudents");
const writeStudents = require("../../funcs/writeStudents");

router.get("/sorting/sortnota", (req, res) => {
  const students = readStudents();
  students.sort((a, b) => b.nota - a.nota);
  writeStudents(students);
  res.json(students);
});

module.exports = router;