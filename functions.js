/// Author: Peter Eugene Mbanda
/// Program: Functions practice
"use strict";

// TODO: ? functions declarations and execution
function showMessage() {
  console.log(`Function init -> ${company}`);
}

function showMessage(from, text) {
  from = "*" + from + "*"; // make "from" look nicer
  text = text || `no text given`;

  console.log(from + ": " + text);
}

function getUSer() {
  // TODO: ? Same variable declared as the outside variable hides the outer
  var userName = "Jamal Mansory";
  console.log(`Hello (Function User) ${userName} welcome`);
}

function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }
  console.log("Showing you the movie"); // (*)
}

function checkAge(age) {
  return age > 18 ? true : false;
}

function getDefaultText() {
  return `Text undeclared`;
}

function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    console.log(i); // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

let company = `Mansory::Pipeline`;
console.log(`Pre-function -> ${company}`);
showMessage(); // ? variable invoke
console.log(`Post-function -> ${company}`);

console.log();

// TODO: ? Globale level variable declaration
var userName = "John Wess";
console.log(`Pre-user -> ${userName}`);
getUSer(); // ? variable invoke
console.log(`Post-user -> ${userName}`);

console.log();

let from = "Ann";
showMessage(from, "Hello"); // *Ann*: Hello
// the value of "from" is the same, the function modified a local copy
console.log(from); // Ann

console.log();

from = "Jamal Mansory";
let text = null;
showMessage(from, text);

console.log(`22 years old!`);
showMovie(22);
console.log(`10 years old!`);
showMovie(10);

console.log();

// TODO: ? Display the prime numbers between 1 and 50
let num = 50;
console.log(`Show prime numbers range ${num}`);
showPrimes(num);

console.log();
console.log();

console.log("Return the minimum of two values....");
// TODO: ? Write a function min(a,b) which returns the least of two numbers a and b.
function min(x, y) {
  let min = x < y ? x : y;
  if (x === y) {
    return `The numbers are both equal`;
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

console.log(pow(5, 3));
console.log(pow(4, 3));
console.log(pow(5, 4));

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
