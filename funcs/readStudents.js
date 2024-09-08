const fs = require("fs");
const path = require("path");

const db = path.join(__dirname, "../students.json");

function readStudents() {
  return JSON.parse(fs.readFileSync(db, "utf-8"));
}

module.exports = readStudents;