"use strict";
let animal = {
  eats: true,
  run() {
    return "animal running";
  }
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit");
console.log(`Rabbit eats ${rabbit.eats}`); // true
console.log(`Rabbit run ${rabbit.run()}`); // true

console.log();
console.log();
