"use strict";

// Closure example
console.log("Program Execution Path............");
console.log();

// Immediate function invokation
(function() {
  let message = "Hello";

  console.log(`${message} I have been invoked immediately`); // Hello
})();

console.log("..........");

// function invoke containing nested inner function
let work = makeWorker();
work();

console.log("..............");
let counter1 = makeCounter();
let counter2 = makeCounter();

// Lexical environment A
console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log();

// Lexical environment B
console.log(counter2());
console.log(counter2());

function makeWorker() {
  let name = "Jamal Mansory"; // scope lock

  return function() {
    console.log(`${name} as closure::`); // closure obtaining variable from outer scope
  };
}

function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}
