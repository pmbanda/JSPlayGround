"use strict";
// TODO: ? function storing value in a variable
let sayHi = function() {
  console.log("Hello from a function expression!");
};

sayHi(); // function incvoke

console.log();

// TODO: ? Since a function is a first class citizen the function can be copied to another variable
let func = sayHi;
console.log(`Invoke using (func) name for the variable....`);
func(); // invoking the function with a different name after being assigned to a varible
console.log(`Invoke using (sayHi) name for the variable....`);
sayHi();

console.log();

// TODO: ? We’ll write a function ask(question, yes, no) with three parameters:
function ask(question, yes, no) {
  return question ? yes() : no();
}
function yes() {
  return `The answer is Yes!`;
}
function no() {
  return `The answer is No!`;
}

console.log(
  `Parameter [0] passed with a truthy value -> ${ask(
    "This is a playing field",
    yes,
    no
  )}`
);
console.log(
  `Parameter [0] passed with a falsy value -> ${ask(undefined, yes, no)}`
);

// TODO: ? writing the function in form of a callback as a function expression
console.log(
  `Parameter [0] passed with a truthy value -> ${ask(
    "This is a playing field",
    function() {
      return "Shorter Syntax";
    },
    function() {
      return "Also a shorter syntax";
    }
  )}`
);

// TODO: ? replace the above code with arrow functions
console.log(
  `Parameter [0] passed with a truthy value -> ${ask(
    "This is a playing field",
    () => "Shorter Syntax",
    () => "Also a shorter syntax"
  )}`
);

console.log();
console.log();

// TODO: ? arrow function declaration
let arrayReturn = (arg1, arg2, ...argN) => {
  return [arg1, arg2, argN];
};
let arr = arrayReturn(10, 34, 299, 543, 453);
console.log(arr);

console.log();
console.log();

// TODO ? Invoke the arrow function with a single parameter declaration
let square = x => x ** 2;
let x = 10;
console.log(`Square ${x} -> ${square(x)} `);

console.log();
console.log();

console.log(console);

console.log();
console.log();

// TODO: ? Determine the type of console and console.log
console.log(`Type of console -> ${typeof console}`);
console.log(`Type of console.log -> ${typeof console.log}`);

console.log();
console.log();

// TODO: Return an object literal from a function
let obj = param => ({ param });
let user = {
  name: `Costa Diego`,
  profession: `Soccer Player`,
  goals: 345,
  seasons: 22,
  club: `Manchester`
};
console.log(obj(user));

let rap = null;
console.log(rap);
