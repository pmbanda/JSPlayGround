"use strict";

// TODO: ? New(DOT)Target -> Checks to see if a function was called with the new keyword for object
// instance creation

let user = new (function() {
  this.name = "John";
  this.isAdmin = false;
  this.age = 22;
  console.log(`New Target -> `, new.target);
})();

console.log(".....................");
console.log(`User Age -> `, user.age);
console.log(`User isAdmin -> `, user.isAdmin);
console.log(`User Name -> `, user.name);

console.log(".....................");

function User(name) {
  this.name = name;
  this.isAdmin = false;

  // When overriding the constructor function the object performing the override is returned
  /////
  ///// {Example}
  /////
  // return { name: "Godzilla" }; Finishes the execution and return this object
  // return 2000 or empty return ; Ignored
}
let jx = new User("John Hex");
console.log(jx.name);

let obj = { name: "Godzilla", age: 2000 };

function A() {
  return obj;
}

function B() {
  return obj;
}

console.log(`Function Comparator -> ${new A() === new B()}`);

// Create a constructor function Calculator that creates objects with 3 methods:

//     read() asks for two values using prompt and remembers them in object properties.
//     sum() returns the sum of these properties.
//     mul() returns the multiplication product of these properties.

function Calculator() {
  this.read = function() {
    this.a = +prompt("Enter value A");
    this.b = +prompt("Enter value B");
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  };
}

// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

//     Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
//     The read() method should use prompt to read a new number and add it to value.

function Accumulator(startingValue) {
  let readLine = require("readline");

  readLine = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  this.value = startingValue;

  this.read = () => {
    this.value += +readLine.question("Which number to add ");
    return this;
  };
}

let acc = new Accumulator(22);
console.log("Result is ", acc.read().read().value);
