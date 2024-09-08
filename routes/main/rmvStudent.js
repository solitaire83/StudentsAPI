const express = require("express");
const router = express.Router();
const readStudents = require("../../funcs/readStudents");
const writeStudents = require("../../funcs/writeStudents");

router.delete("/rmvStudent", (req, res) => {
  const { nume, prenume } = req.body;
  let students = readStudents();
  students = students.filter(
    (student) => student.nume !== nume || student.prenume !== prenume
  );
  writeStudents(students);
  res.status(204).send();
});

module.exports = router;