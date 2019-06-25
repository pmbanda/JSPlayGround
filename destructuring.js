"use strict";
// Destructure into first name and surname
console.log(`Array Destructure`);
let arr = ["Eugene", "Kantor"];

let [first, last] = arr;
console.log(`First name:-> ${first} Last name:-> ${last}`);

console.log();

var [firstName, , ...position] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic"
];

console.log(`Name:: ${firstName} Title:: ${position}`);

console.log();
console.log(`Object Destructure`);

// Assign to an object property
let user = {};
[user.firstName, user.lastName] = "Ilya Kantor".split(" ");
console.log(user);

let options = {
  title: "Menu",
  width: 100,
  height: 200
};
// Destructure an object
let { title, width, height } = options;
console.log(`Title:: ${title} Height:: ${height} Width:: ${width}`);

console.log(".................");
console.log();
console.log(`Destructure with the spread operator`);

options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = property named title
// rest = object with the rest of properties
let { title: t, ...rest } = options;

// now title="Menu", rest={height: 200, width: 100}
console.log(`Rest operator height `, rest.height); // 200
console.log(`Rest operator width `, rest.width); // 100

console.log();
console.log(`Nested Destructuring...`);
options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true // something extra that we will not destruct
};
let {
  size: s,
  extra: x,
  items: [item1, item2]
} = options;
console.log(`Size props::-> `, s.height, s.width);
console.log(`Items props::-> `, item1, item2);
console.log(`Extra props::-> `, x);

// Write the destructuring assignment that reads:

//     name property into the variable name.
//     years property into the variable age.
//     isAdmin property into the variable isAdmin (false, if no such property)

console.log();
user = {
  name: "John",
  years: 30
};

let { name, years: age, isAdmin = false } = user;
console.log(`Name `, name);
console.log(`Name `, age);
console.log(`Name `, isAdmin);

// Create the function topSalary(salaries) that returns the name of the top-paid person.

//     If salaries is empty, it should return null.
//     If there are multiple top-paid persons, return any of them.

// P.S. Use Object.entries and destructuring to iterate over key/value pairs.
console.log();
console.log();

let salaries = {
  John: 100,
  Peter: 300,
  Mary: 250
};

console.log(`Highest Salary in `, salaries);

let topSalary = salaries => {
  salaries === "" && null; // Return null if salaries is empty
  let highest = 0,
    userName = "";

  for (let [name, value] of Object.entries(salaries)) {
    if (value > highest) {
      highest = value;
      userName = name;
    }
  }

  return userName;
};

console.log(`Highest Salary-> ${topSalary(salaries)}`);
