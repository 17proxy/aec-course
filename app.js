const input = require("readline-sync");

// import functions from math.js
const math = require("./math");

// take input
let num1 = Number(input.question("Enter first number: "));
let num2 = Number(input.question("Enter second number: "));

// call the functions
console.log("Addition:", math.add(num1, num2));
console.log("Subtraction:", math.subtract(num1, num2));