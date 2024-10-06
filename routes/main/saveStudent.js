const express = require("express");
const router = express.Router();
const readStudents = require("../../funcs/readStudents");
const writeStudents = require("../../funcs/writeStudents");

const {StudentFormat, StudentExistent} = require("../../funcs/formatStudents");

router.post("/saveStudent", (req, res) => {
  const students = readStudents();
  const studentnou = req.body;

  const format = StudentFormat(studentnou);
  if(!format.corect) return res.status(400).json({err: format.err});
  const student = StudentExistent(students, studentnou);
  if(student.existent) return res.status(400).json({err: student.err});

  students.push(studentnou);
  writeStudents(students);
  res.status(201).json(studentnou);
});

module.exports = router;