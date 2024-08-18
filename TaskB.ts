// 100 Days Of Coding Challenge!

/** Question 61:
Making a Student Template: Create a blueprint for student information, including their name, age,
and the classes they are taking, and then fill in this blueprint with an example student.*/

//------------------------------------------------------------------------------------------------

// Define an interface for student information
interface Student {
  name: string;
  age: number;
  classes: string[];
}

// Example of student object following the Student interface
const exampleStudent: Student = {
  name: "Bilal",
  age: 20,
  classes: ["TypeScript", "Python", "JavaScript"],
};

// Function to display student information
function displayStudentInfo(student: Student): void {
  console.log(`Name: ${student.name}`);
  console.log(`Age: ${student.age}`);
  console.log(`Classes: ${student.classes.join(", ")}`);
}

// Display the example student's information
displayStudentInfo(exampleStudent);
