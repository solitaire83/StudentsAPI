const express = require("express");
const router = express.Router();
const readStudents = require("../../funcs/readStudents");

router.get("/countStudents", (req, res) => {
    try {
        const students = readStudents();
        const count = students.length;
        res.json({countedstudents: count});
    } catch (e) {
        res.status(500).json({err: "n-am citit nimic"})
    }

});

module.exports = router;