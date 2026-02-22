const input = require("readline-sync");

// create user object using input
let user = {
  name: input.question("Enter name: "),
  email: input.question("Enter email: "),
  age: Number(input.question("Enter age: "))
};

// 1. convert object to JSON string
let jsonString = JSON.stringify(user);

// 2. display JSON string
console.log("\nJSON String:");
console.log(jsonString);

// 3. convert JSON string back to JavaScript object
let convertedObject = JSON.parse(jsonString);

// 4. display one property from the converted object
console.log("\nName from converted object:", convertedObject.name);