"use strict";
// TODO: ? Symbol class tutorial js
let id = Symbol.for("id");
console.log(`Symbol type ${typeof id} and value ${id.toString()}`);

console.log();
console.log();

// TODO:Two symbols with the same id are not equal
let id1 = Symbol.for("name");
let id2 = Symbol.for("users");

console.log("Strict Equals");
console.log(
  `is (${id1.toString()} and ${id2.toString()}) symbols Equal ->  ${id1 ===
    id2}`
);

console.log();
console.log();

console.log("Not -- Strict Equals");
console.log(
  `is (${id1.toString()} and ${id2.toString()}) symbols Equal ->  ${id1 == id2}`
);

console.log();

let users = [
  {
    id: 1,
    name: "John Doe",
    age: 22,
    [id]: 100
  },
  {
    id: 2,
    name: "Jayne Doe",
    age: 12,
    [id]: 101
  },
  {
    id: 3,
    name: "Jamal Malik",
    age: 22,
    [id]: 102
  }
];

// TODO: ? Loop over the object to determine the regular id and the symbol id
users.forEach((item, index) => {
  console.log(
    `Main id -> ${item.id} :: Symbol id ${item[id]} :: Name ${
      item.name
    } :: Age ${item.age}`
  );
});

console.log();
console.log();

console.log("Determine the symbols name");
console.log(
  `Symbol name for ${Symbol("id").toString()} is ${Symbol.keyFor(id)}`
);
console.log(
  `Symbol name for ${Symbol("name").toString()} is ${Symbol.keyFor(id1)}`
);
console.log(
  `Symbol name for ${Symbol("user").toString()} is ${Symbol.keyFor(id2)}`
);
console.log();
