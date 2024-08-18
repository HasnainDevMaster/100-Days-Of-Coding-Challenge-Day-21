"use strict";
// 100 Days Of Coding Challenge!
// Example of student object following the Student interface
const exampleStudent = {
    name: "Bilal",
    age: 20,
    classes: ["TypeScript", "Python", "JavaScript"],
};
// Function to display student information
function displayStudentInfo(student) {
    console.log(`Name: ${student.name}`);
    console.log(`Age: ${student.age}`);
    console.log(`Classes: ${student.classes.join(", ")}`);
}
// Display the example student's information
displayStudentInfo(exampleStudent);
