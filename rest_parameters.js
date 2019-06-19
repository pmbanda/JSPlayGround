"use strict";

// invoke the function with multiple parameters
console.log("Runner App");
sum(1, 20, 3, 4, 5, 6, 6, 7);

// Summation of all the arguments
console.log("...............");
console.log();

console.log(
  `The sum of all numbers in function are -> ${summation(100, 300, 600)}`
);

// Function Declarations
function summation(...args) {
  // sum all the numbers in the array
  console.log(
    `Type of arguments ${typeof arguments} is Array ${Array.isArray(arguments)}`
  );
  console.log(
    `Type of arguments ${typeof args} is Array ${Array.isArray(args)}`
  );
  console.log(
    `Type of arguments ${typeof args} is Array ${Array.isArray(
      Object.entries(arguments)
    )}`
  );
  return args.reduce((initial, value) => initial + value, 0);
}

function sum(a, b) {
  console.log(`var a -> ${a}`);
  console.log(`var a -> ${b}`);
  return a + b;
}
