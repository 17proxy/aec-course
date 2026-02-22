const input = require("readline-sync");

// function to check even or odd
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(num + " is Even");
  } else {
    console.log(num + " is Odd");
  }
}

// take 3 inputs
let n1 = Number(input.question("Enter first number: "));
let n2 = Number(input.question("Enter second number: "));
let n3 = Number(input.question("Enter third number: "));

// function calls
checkEvenOdd(n1);
checkEvenOdd(n2);
checkEvenOdd(n3);