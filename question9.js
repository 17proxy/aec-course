// 1. Display Start
console.log("Start");

// 2. Asynchronous timer (2 seconds)
setTimeout(() => {
  console.log("Data Loaded");
}, 2000);

// 4. Display End
console.log("End");


/*


Step-by-step execution:

1. console.log("Start") - runs immediately - printed.

2. setTimeout(..., 2000)
The timer is started in the background by the Web APIs / Node runtime.
JavaScript does not wait for 2 seconds.

3. console.log("End") - runs immediately - printed.

4. After 2 seconds - callback from setTimeout goes to the event queue

5. Event loop executes it - "Data Loaded" is printed.
*/