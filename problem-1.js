let getPassingStudents = (students) => {
    let filteredStudents = students.filter(student => student.grade >= 60);
    console.log(filteredStudents);
    return filteredStudents;
};

let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 55 },
    { name: "Charlie", grade: 70 },
    { name: "David", grade: 40 },
    { name: "Eve", grade: 90 }
];

getPassingStudents(students);



