const input = require("readline-sync");

let name = input.question("Enter your name: ");
let age = input.question("Enter your age: ");

console.log("Hello " + name + ", you are " + age + " years old.");