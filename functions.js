/// Author: Peter Eugene Mbanda
/// Program: Functions practice
"use strict";

let company = `Rouge Developer`;
console.log(`Pre-function -> ${company}`);
console.log(`Post-function -> ${showMessage(company, "Jamal Mansory")}`);

console.log();

// TODO: ? Globale level variable declaration
var userName = "John Wess";
console.log(`Pre-user -> ${userName}`);
console.log(`Mid-user -> ${getUser()}`);
console.log(`Post-user -> ${userName}`);
console.log();

let from = "Ann";
// *Ann*: Hello
// the value of "from" is the same, the function modified a local copy
console.log(`${showMessage(from, "This is my message")}`); // Ann

console.log();

from = "Jamal Mansory";
let text = null;
console.log(`${showMessage(from, text)}`);

console.log();

let age = 22;
console.log(`Is age ${age} authorized:: ${showMovie(age)}`);
age = 10;
console.log(`Is age ${age} authorized:: ${showMovie(age)}`);

console.log();

// TODO: ? Display the prime numbers between 1 and 50
let num = 50;
console.log(`Show prime numbers range ${num}`);
showPrimes(num);

console.log();
console.log();

function showMessage(from, text) {
  from = "*" + from + "*"; // make "from" look nicer
  text = text || `no text given`;

  return from + ": " + text;
}

function getUser() {
  // TODO: ? Same variable declared as the outside variable hides the outer
  let userName = "Jamal Mansory";
  return `Hello ${userName.toUpperCase()} welcome`;
}

function showMovie(age) {
  if (!checkAge(age)) {
    return "Underage";
  }

  return "Showing you the movie"; // (*)
}

function checkAge(age) {
  return age > 18 ? true : false;
}

function getDefaultText() {
  return `Default Text!`;
}

function showPrimes(x) {
  for (let i = 2; i < x; i++) {
    if (!isPrime(i)) continue;

    console.log(i); // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
console.log("Return the minimum of two values....");
// TODO: ? Write a function min(a,b) which returns the least of two numbers a and b.
function min(x, y) {
  let min = x < y ? x : y;

  if (x === y) {
    return `The numbers are both equal x:${x} y:${y}`;
  }
  return `The minimum between ${x} and ${y} is ${min}`;
}

console.log(min(2, 5));
console.log(min(3, -1));
console.log(min(1, 1));

// TODO ? Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result

console.log();
console.log();

function pow(x, n) {
  let result = x;
  for (let _x = 1; _x < n - 1; _x++) {
    result *= x;
  }
  return result;
}

// TODO: Make two variants of check age
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Do you have your parents permission to access this page?');
//   }
// }

// function checkAge(age) {
//   age =
//     age > 18
//       ? true
//       : console.log("Do you have your parents permission to access this page?");
//   return age;
// }

// function checkAge(age) {
//   return (
//     age > 18 ||
//     console.log("Do you have your parents permission to access this page?")
//   );
// }
