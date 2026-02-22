const input = require("readline-sync");

// take input for object
let user = {
  name: input.question("Enter name: "),
  email: input.question("Enter email: "),
  password: input.question("Enter password: "),
  age: Number(input.question("Enter age: "))
};

// 1. display the user’s name
console.log("\nUser name:", user.name);

// 2. update the email property
let newEmail = input.question("Enter new email to update: ");
user.email = newEmail;

// 3. add new property isAdmin
let adminInput = input.question("Is the user admin? (yes/no): ");
user.isAdmin = adminInput.toLowerCase() === "yes";

// 4. display the updated object
console.log("\nUpdated user object:");
console.log(user);