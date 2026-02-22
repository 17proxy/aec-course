const input = require("readline-sync");

let todos = [];

// 1. Add a task
function addTask() {
  let task = input.question("Enter new task: ");
  todos.push(task);
  console.log("Task added.");
}

// 2. View all tasks
function viewTasks() {
  if (todos.length === 0) {
    console.log("No tasks available.");
    return;
  }

  console.log("\nTo-Do List:");
  for (let i = 0; i < todos.length; i++) {
    console.log(i + 1 + ". " + todos[i]);
  }
}

// 3. Update a task
function updateTask() {
  viewTasks();
  let index = Number(input.question("Enter task number to update: ")) - 1;

  if (index >= 0 && index < todos.length) {
    let newTask = input.question("Enter updated task: ");
    todos[index] = newTask;
    console.log("Task updated.");
  } else {
    console.log("Invalid task number.");
  }
}

// 4. Delete a task
function deleteTask() {
  viewTasks();
  let index = Number(input.question("Enter task number to delete: ")) - 1;

  if (index >= 0 && index < todos.length) {
    todos.splice(index, 1);
    console.log("Task deleted.");
  } else {
    console.log("Invalid task number.");
  }
}

// menu to test all operations
while (true) {
  console.log("\n--- TO-DO MENU ---");
  console.log("1. Add Task");
  console.log("2. View Tasks");
  console.log("3. Update Task");
  console.log("4. Delete Task");
  console.log("5. Exit");

  let choice = input.question("Enter your choice: ");

  switch (choice) {
    case "1":
      addTask();
      break;
    case "2":
      viewTasks();
      break;
    case "3":
      updateTask();
      break;
    case "4":
      deleteTask();
      break;
    case "5":
      console.log("Exiting...");
      process.exit();
    default:
      console.log("Invalid choice.");
  }
}