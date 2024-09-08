const fs = require("fs");
const path = require("path");

const db = path.join(__dirname, "../students.json");

function writeStudents(students) {
  fs.writeFileSync(db, JSON.stringify(students, null, 2));
}

module.exports = writeStudents;