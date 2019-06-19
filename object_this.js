"use strict";

// TODO: ? Class object creation
let user = {
  name: "John",
  age: 30,
  sayHi() {
    console.log(`The value of this `, this);
  }
};
console.log();

console.log(user); // ? User object display
user.sayHi();

console.log();

// TODO: Call without direct this
let greeting = user.sayHi;
greeting();

console.log();
console.log();
// TODO: ? Create an object ladder

let ladder = {
  step: 33,
  up() {
    this.step++;
    console.log(`Increment ${this.step}`);
    return this;
  },
  down() {
    this.step--;
    console.log(`Decrement ${this.step}`);
    return this;
  },
  showStep: function() {
    // shows the current step
    console.log(this.step);
    return this;
  }
};

ladder
  .up()
  .up()
  .down()
  .down()
  .down()
  .down()
  .down()
  .up()
  .up()
  .down()
  .showStep();
