const input = require("readline-sync");

function fetchUserData(name, email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: name,
        email: email
      });
    }, 2000);
  });
}

async function getUser() {
  const name = input.question("Enter name: ");
  const email = input.question("Enter email: ");

  console.log("Fetching user data...");

  const user = await fetchUserData(name, email);

  console.log("User data received:");
  console.log(user);
}

getUser();