"use strict";

let foo = function() {
  console.log("function::");
};
console.log(`Function name is ${foo.name}`);

foo = function(x, y) {
  console.log("function::");
};
console.log(`Function length with two parameters is ${foo.length}`);

// args length is not counted during the length assignment
foo = function(x, y, z, ...args) {
  console.log("function::");
};
console.log(`Function length with three parameters is ${foo.length}`);
