"use strict";
let animal = {
  eats: true,
  walk() {
    return `Animal walk`;
  }
};

// rabbit inherits from animal
let rabbit = {
  jumps: true,
  __proto__: animal
};

console.log("Rabbit Props");
console.log(`Rabbit jumps ${rabbit.jumps}`);
console.log(`Rabbit eats ${rabbit.eats}`);
console.log(`Rabbit walk ${rabbit.walk()}`);

console.log();
console.log();

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

// That’s for data properties only, not for accessors. If a property is a getter/setter, then it behaves like a function: getters/setters are looked up in the prototype.
let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)
// console.log(admin.fullName);
console.log();

// Task
console.log();
console.log();

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

// Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head. For instance, pockets.pen should be (found in table), bed.glasses should be 1 (found in head).
// Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
console.log(`pockets::pen ${pockets.pen}`);
console.log(`bed::glasses ${bed.glasses}`);

// We have rabbit inheriting from animal.
// If we call rabbit.eat(), which object receives the full property: animal or rabbit?
// Task
console.log();
console.log();

animal = {
  eat() {
    this.full = true;
    return this.full;
  }
};

rabbit = {
  __proto__: animal
};

console.log(rabbit.eat());
