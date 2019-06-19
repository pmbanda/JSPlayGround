"use strict ";
// Array of names
let names = ["Jamal", "Rachael", "Sylvester", "Cory"];
let seconds = 3000;

console.log(`Calling user after ${seconds} seconds!`);
console.log(`.........`);

let timeOutID = setTimeout(() => {
  let digit = Math.floor(Math.random() * names.length);

  sayHi(names[digit]); // Invoke any name after 3000 ms
}, seconds);

function sayHi(name = "Unknown") {
  console.log(`Hello ${name.toUpperCase()} how are you!`);
}
