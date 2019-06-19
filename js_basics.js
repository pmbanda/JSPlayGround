"use strict";
// TODO: Common JavaScript logging commands
console.log("Im JavaScript!");

console.log();

// TODO: Looping through an array of elements
[12, 22, 3, 65, 55].forEach((item, index) => {
  console.log(`${item} -> index:: ${index}`);
});
/*  
    An example with two messages.
    This is a multiline comment.
*/

/// An example of a single line comment
//# TODO: comment using the shortcut ctrl-/
console.log();

let message = "This is a JavaScript Message!";
console.log(`${message}`);

console.log();

// TODO: Variable declaration different way
let userName;
userName = "Peter Eugene Mbanda";
console.log(userName);

console.log();

// TODO: Declaration of multiple variables
let user = "John",
  age = 25,
  msg = "Hello";

/*
    TODO:   Declare two variables: admin and name.
    Assign the value "John" to name.
    Copy the value from name to admin.
    Show the value of admin using alert (must output “John”).
*/

let admin;
let name = "John";
admin = name;
console.log(`Admin name ${admin}`);
console.log(`User name ${name}`);

console.log();

// TODO: Declare the name of my planet and the current user to a website
const PLANET_EARTH = 99999;
let currentUser;

console.log();

function someCode() {
  let birthday = new Date().getFullYear().toString();
  return birthday;
}

age = someCode();
console.log(`The age is ${age}`);

console.log();

let str = "Hello";
let str2 = "Single quotes are ok too";
let phrase = `can embed ${str}`;
console.log(str, str2, phrase);

let data = null;
console.log(`The value of data is ${data}`);

console.log(`Is null equal to undefined ${null == undefined}`);
console.log(`Is null equal to undefined Strict Equal ${null === undefined}`);

console.log();
// TODO: Determine the type of variable
console.log("Determine the type of values.....");
console.log(typeof 0); // "number"
console.log(typeof true); // "boolean"
console.log(typeof "foo"); // "string"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof Math); // "object"  (1)
console.log(typeof null); // "object"  (2)

console.log();

// TODO: looper using the pre and the post increment and the decrement values
console.log(`Variable looper........`);
let count = 0;
for (let index = 0; index < 6; index++) {
  console.log(`Count ${count}`);
  count++;
}
