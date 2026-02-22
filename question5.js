const input = require("readline-sync");

// create array with 5 student names (input)
let students = [];

for (let i = 0; i < 5; i++) {
  let name = input.question("Enter student name " + (i + 1) + ": ");
  students.push(name);
}

// add a new student
let newStudent = input.question("Enter a new student name to add: ");
students.push(newStudent);

// remove a student (by name)
let removeStudent = input.question("Enter a student name to remove: ");
let index = students.indexOf(removeStudent);

if (index !== -1) {
  students.splice(index, 1);
  console.log(removeStudent + " removed successfully.");
} else {
  console.log("Student not found.");
}

// display all student names
console.log("\nFinal list of students:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}