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
console.log(`Filtered `, arr.filter(inArray([1, 2, 6])));

function inBetween(a, b) {
  return x => x >= a && x <= b;
}
function inArray(arr) {
  return x => arr.includes(x);
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

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };

  this.down = function() {
    return --count;
  };
}

let counter = new Counter();

console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.down()); // 1

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
// Error due to the block code hence creation of a lexical environment away from global
//sayHi();

console.log(".................");
console.log();

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

// So, instead of writing a function, just put byField(fieldName).
// Write the function byField that can be used for that.

console.log(`Sort by name..`);
users.sort(byField("name"));
console.log(users);
console.log(`Sort by age..`);
users.sort(byField("age"));
console.log(users);

function byField(fieldName) {
  return (a, b) => (a[fieldName] > b[fieldName] ? 1 : -1);
}

console.log("...............");
console.log();

function makeArmy() {
  let shooters = [];

  let i = 0;

  while (i < 10) {
    let j = i; // Put i in the inner lexical environment
    let shooter = () => j; // should show its number

    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

console.log(`Shooter 0 `, army[0]()); // the shooter number 0 shows 10
console.log(`Shooter 5 `, army[5]()); // and number 5 also outputs 10...
