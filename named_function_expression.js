"use strict";
// Function name is accessible a name property
let foo = function() {
  console.log("function::");
};
console.log(foo.toString());
console.log(`Function name is ${foo.name}`);

console.log();
// Determine the number of parameters in a function using the length property
foo = function(x, y) {
  console.log("function::");
};
console.log(foo.toString());
console.log(`Function length with two parameters is ${foo.length}`);

console.log();
console.log(`Length with the ...args extra parameters`);
// args length is not counted during the length assignment
foo = function(x, y, z, ...args) {
  console.log("function::");
};
console.log(foo.toString());
console.log(`Function length with three parameters is ${foo.length}`);

console.log();
console.log();
