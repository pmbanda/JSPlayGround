"use strict"; // for modern browser functions

console.log("......................");
// create a new object with double prices from the existing one
let prices = {
  banana: 1,
  orange: 2,
  meat: 4
};

let squareObject = obj => {
  for (let [key, value] of Object.entries(obj)) {
    prices[key] = value * 2;
  }
  return obj;
};
console.log(`Original Object -> `, prices);
console.log(`Transform.....`);
console.log(`New Object -> `, squareObject(prices));

console.log();
console.log(`Tasks (.... Objects Keys Values Entries ...)`);
console.log();
// There is a salaries object with arbitrary number of salaries.
// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
// If salaries is empty, then the result must be 0.

let salaries = {
  John: 100,
  Pete: 300,
  Connor: null,
  Mary: 250,
  "": 536
};
let user = {
  name: "John",
  age: 30
};

// function that accpts object and returns the sum using the reduce function
let sumSalaries = obj => {
  let sum = 0;
  for (let values of Object.values(obj)) {
    let value = values === "" || values === null ? 0 : values;
    sum += value;
  }
  return sum;
};
// using the reduce function
function reduceSumSalaries(salaries) {
  return Object.values(salaries).reduce((a, b) => a + b, 0); // 650
}
console.log(
  `The sum of salaries is ${sumSalaries(salaries)} from Object `,
  salaries
);

// Count Properties
console.log(``);
// Write a function count(obj) that returns the number of properties in the object:
console.log(`The number of properties found ${count(salaries)}`);
console.log(`Object `, salaries);
console.log(`The number of properties found ${count(user)}`);
console.log(`Object `, user);

function count(obj) {
  let count = 0;
  for (let key of Object.keys(obj)) {
    key == null || key == "" ? count : (count += 1);
  }
  return count == 1 ? ` is ${count}` : ` are ${count}`;
}
