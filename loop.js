// TODO: get only the odd numbers
"use strict";

for (let index = 0; index < 30; index++) {
  if (index % 2 == 0) continue;
  console.log(index);
}
console.log();

console.log("..................");

console.log();

// TODO: Multiplication table
let size = 10;

// inner: {
//   outer: for (let i = 1; i < size; i++) {
//     for (let j = 1; j < size; j++) {
//       if (i * j === 63) break outer;
//       console.log(`${i} * ${j} = ${i * j}`);
//     }
//     console.log();
//   }
//   console.log("Last Inner");
// }

// console.log("Done!");

console.log();
// TODO: output even numbers in the for loop
let len = 11;

for (let i = 2; i < len; i++) {
  if (i % 2 == 0) console.log(i);
}

// Replace the for loop witb a while loop
// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }
console.log();

let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

function prop() {
  let num;
  do {
    num = +prompt("Enter a number greater than 100", "0");
  } while (num < 100 && num);
  alert(`You entered ${num}`);
}

console.log();

console.log("Get the prime numbers .....");

// TODO: Obtain the prime numbers
function isPrime(n) {
  for (let j = 2; j <= Math.sqrt(n); j++) {
    if (n % j == 0) {
      return;
    }
  }
  console.log(n);
}

let startTime = new Date().getMilliseconds();
for (let x = 2; x < 100; x++) {
  isPrime(x);
}
let stopTime = new Date().getMilliseconds();
console.log(`Time lapsed ${stopTime - startTime} seconds`);

// for (let index = 2; index < 35; index++) {
//   isPrime(index);
// }
