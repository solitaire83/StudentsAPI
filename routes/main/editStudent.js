const express = require("express");
const router = express.Router();
const readStudents = require("../../funcs/readStudents");
const writeStudents = require("../../funcs/writeStudents");

router.put("/editStudent", (req, res) => {
  const students = readStudents();
  const { nume, prenume, newnota, newnume, newprenume} = req.body;

  if(newnota < 0 || newnota > 10 ) return res.status(400).json({err: "nota trebuie cuprinsa intre 0 si 10"});
  
  const student = students.find(student => student.nume === nume && student.prenume === prenume);
  if(!student) return res.status(404).json({err: "nu ai specificat un nume/prenume"});

  if(student) {
      if(newnota !== undefined) student.nota = newnota;
      if(newnume !== undefined) student.nume = newnume;
      if(newprenume !== undefined) student.prenume = newprenume;

      writeStudents(students);
      res.status(200).json(student);
  } else {
      res.status(404).json({err: "n-am gasit acest student"});
  }

});

module.exports = router;