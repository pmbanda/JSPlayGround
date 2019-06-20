"use strict ";

// Array of names
let names = ["Jamal", "Rachael", "Sylvester", "Cory"];
let seconds = 2000;

console.log(`Calling user after ${seconds} seconds!`);
console.log(`.........`);

let timeOutID = setTimeout(() => {
  let digit = Math.floor(Math.random() * names.length);

  sayHi(names[digit], () => {
    console.log("Im done bitches");
  }); // Invoke any name after 3000 ms
}, seconds);

function sayHi(name = "Unknown", callback) {
  console.log(`Hello ${name} how are you!`);
  callback();
  console.log();
}

// All arguments have the same meaning. But unlike setTimeout it runs the function not only once, but regularly after the given interval of time.
console.log();

console.log("Set Interval...");
let count = 1;

timeOutID = setInterval(() => {
  console.log(`Tick Tock ${count}`);
  ++count;
  count >= 10 && clearInterval(timeOutID);
  // repeat every 3000 ms
}, seconds);

console.log();
console.log("..........");

// Recursive Call.......??????????????...................
// let timerId = setTimeout(function tick() {
//   alert('tick');
//   timerId = setTimeout(tick, 2000); // (*)
// }, 2000);
// Recursive Call.......??????????????...................

// Invoked only after code complete
setTimeout(() => console.log("World"), 0);

console.log("Hello");
