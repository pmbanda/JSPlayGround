"use strict";

console.log(`Function name is ${foo.name}`);

console.log();

console.log(`Function name is ${bar.name}`);
console.log(
  `Function ${bar.name} with two parameters has length ${bar.length}`
);

console.log();

console.log(`Length with the ...args parameters ${fooBar.length}`);

console.log();
sayHi.counter = 27;
sayHi.age = 3;
sayHi.ujah = "sukmdik";

sayHi();

console.log(`Called counter ${sayHi.counter} times`); // Called 2 times
console.log(`Age ${sayHi.age}`);
console.log(`Age ${sayHi.ujah}`);

console.log();

// It allows the function to reference itself internally.
// It is not visible outside of the function.

sayHi = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    // Named function expression
    // -> Ghost protocol
    //only visible inside this block and not in the outer
    func("Guest"); // Now all fine
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest
// But this won't work:
//func(); // Error, func is not defined (not visible outside of the function)

// Function Declarations

// Assigning properties to a function
function sayHi() {
  // let's count how many times we run
  sayHi.counter++;
}
// Function name is accessible a name property
function foo() {
  console.log("function::");
  return null;
}

// Determine the number of parameters in a function using the length property
function bar(x, y) {
  console.log("function::");
  return null;
}

// args length is not counted during the length assignment
function fooBar(x, y, z, ...args) {
  console.log("function::");
  return null;
}

// Test:: Knowledge Transfer
// Modify the code of makeCounter() so that the counter can also decrease and set the number:

//     counter() should return the next number (as before).
//     counter.set(value) should set the count to value.
//     counter.decrease() should decrease the count by 1.

function makeCounter() {
  function counter() {
    return (counter.count += 1);
  }

  counter.set = value => (counter.count = value);

  counter.decrement = () => (counter.count -= 1);

  return counter;
}

console.log();
console.log(
  `Modify the code of makeCounter() so that the counter can also decrease and set the number:`
);
let counter = makeCounter();
counter.set(100);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter());

console.log();
console.log();
// write function sum that would work like this:
// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

console.log(`length of sum `, sum(10)(20));
console.log(`length of sum `, sum(10)(20)(30));
// console.log(`length of sum `, sum(10)(20)(40)(22));
