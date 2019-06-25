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
