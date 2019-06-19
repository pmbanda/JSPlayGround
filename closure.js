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

console.log("...........");
// Ways to create IIFE (Immediately invoked function expressions)

(function() {
  console.log("Parentheses around the function");
})();

(function() {
  console.log("Parentheses around the whole thing");
})();

!(function() {
  console.log("Bitwise NOT operator starts the expression");
})();

+(function() {
  console.log("Unary plus starts the expression");
})();

console.log("............");

// Write function sum that works like this: sum(a)(b) = a+b.
console.log(`Sum of the values is ${sum(12)(10)}`);
console.log(`Sum of the values is ${sum(1)(2)}`);
console.log(`Sum of the values is ${sum(5)(-1)}`);

console.log();
console.log();

/* .. your code for inBetween and inArray */

/*inBetween(a, b) – between a and b or equal to them (inclusively).
inArray([...]) – in the given array.*/

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(`Filtered `, arr.filter(inBetween(3, 6)));
console.log(`Filtered `, arr.filter(inArray([1, 2, 10])));

function inBetween(a, b) {
  return x => x >= a && x <= b;
}
function inArray(...arr) {
  return x => x >= x[0] && x <= x[1];
}

function sum(a) {
  return function(b) {
    return a + b;
  };
}
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
