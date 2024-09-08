const express = require("express");
const router = express.Router();
const readStudents = require("../../funcs/readStudents");
const writeStudents = require("../../funcs/writeStudents");

router.get("/sorting/sortnume", (req, res) => {
  const students = readStudents();
  students.sort((a, b) => a.nume.localeCompare(b.nume));
  writeStudents(students);
  res.json(students);
});

module.exports = router;