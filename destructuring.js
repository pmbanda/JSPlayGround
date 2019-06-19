let arr = ["Ilya", "Kantor"];

[firstName, lastName] = arr;
console.log(`Hello ${firstName} ${lastName}`);

var [firstName, , position] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic"
];

console.log(`Name ${firstName} title ${position}`);

console.log();
console.log(`Object ......`);

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
console.log(`${title} ${height} ${width}`);

console.log(".................");
console.log();
let options = {
  size: {
    width: 100,
    height: 200
  },
  items: ["Cake", "Donut"],
  extra: true // something extra that we will not destruct
};
