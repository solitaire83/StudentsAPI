const express = require("express");
const router = express.Router();
const readStudents = require("../../funcs/readStudents");
const writeStudents = require("../../funcs/writeStudents");
const { StudentExistent } = require("../../funcs/formatStudents");

router.get("/studgen", (req, res) => {
    const NUMESTUDENTI = [
        "Popovici",
        "Petrescu",
        "Neacsu",
        "Balaban",
        "Stoica",
        "Crisan",
        "Diaconu",
        "Ichim",
        "Anastasie",
        "Adetu",
        "Testulescu",
        "Zamfir",
        "Serafim",
        "Sandu",
        "Ciurea",
        "Nedelcu",
        "Toderascu"
      ];
      
      const PRENUMESTUDENTI = [
        "David",
        "Andrei",
        "Madalin",
        "Gabriela",
        "Ionut",
        "Mihai",
        "Constantin",
        "Iacob",
        "Ioan",
        "Sorin",
        "Radu",
        "Pavel",
        "Darius",
        "Stefan"
      ];
      
      const NOTESTUDENTI = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
      
        const nume = NUMESTUDENTI[Math.floor(Math.random() * NUMESTUDENTI.length)];
        const prenume = PRENUMESTUDENTI[Math.floor(Math.random() * PRENUMESTUDENTI.length)];
        const nota = NOTESTUDENTI[Math.floor(Math.random() * NOTESTUDENTI.length)];
      
        const students = readStudents();
        const student = {
            nume: nume,
            prenume: prenume,
            nota: nota
        }

        const { existent, err } = StudentExistent(students, student);
        if(!existent) {
            students.push(student);
            writeStudents(students);
            res.status(200).json({
                ok: "Student generat cu succes",
                studentgenerat: {
                    nume: student.nume,
                    prenume: student.prenume,
                    nota: student.nota
                }
            });
        } else {
            res.status(406).json({err: err});
        }
});

module.exports = router;