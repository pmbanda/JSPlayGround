"use strct";
// create a user classs
class User {
  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }
    this._name = value;
  }

  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log(this.name);
  }
}
// class is a function
console.log(typeof User); // function

// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi); // console.log(this.name);

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

//inheritance
console.log();
console.log();

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stopped.`);
  }
  toString() {
    return `${this.constructor.name} :: ${this.name}`;
  }
}

// Inherit from Animal by specifying "extends Animal"
class Rabbit extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  hide() {
    console.log(`${this.name} hides!`);
  }
  toString() {
    return `${this.constructor.name} :: ${this.name} :: ${this.age}`;
  }
}
class Hare extends Rabbit {
  constructor(name, age) {
    super(name, age);
  }
  hide() {
    console.log(`${this.name} hides!`);
  }
  toString() {
    return `${this.constructor.name} :: ${this.name} :: ${this.age}`;
  }
}
console.log(`Rabbit Inheritance from animal `);
let rabbit = new Rabbit("Rabbit Mansory", 33);
let hare = new Hare("Hare Mansory", 22);
let animal = new Animal("Animal Mansory");

console.log(rabbit.toString());
console.log(hare.toString());
console.log(animal.toString());
