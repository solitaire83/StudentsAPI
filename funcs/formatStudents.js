function StudentFormat(student) {
    const standard = ['nume', 'prenume', 'nota'];
    const propscounter = Object.keys(student).length - standard.length;

    const nostandard = standard.filter(prop => !student.hasOwnProperty(prop));
    if(nostandard.length === standard.length) return { corect: false, err: "proprietatile standard nu exista! [nume/prenume/nota]"};

    if(student.nota < 0 || student.nota > 10) return { corect: false, err: "nota trebuie sa fie intre 0 si 10"};
    if(student.nume === '' || student.prenume === '' || student.nota === '') return { corect: false, err: "ai uitat sa adaugi valorile proprietatilor standard"}; 

    for(const prop of standard) {
        if(!student.hasOwnProperty(prop)) {
            return { corect: false, err: `proprietatea ${prop} trebuie adaugata`};
        }
    }
  
    if (propscounter > 5) {
      return { corect: false, err: "poti adauga doar 5 proprietati aditionale" };
    }
  
    return { corect: true };
  }

  function StudentExistent(students, student) {
    const existent = students.some(st => st.nume === student.nume && st.prenume === student.prenume);
    if(existent) {
        return { existent: true, err: "student existent.." }
    }

    return { existent: false };
  }
  
  module.exports = { StudentFormat, StudentExistent };