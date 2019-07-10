"use strict";

// getters and setters are designed as functions but are used as methods
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
console.log(`Get users full name ${user.fullName}`);
user.fullName = "Alice Wonderland";
console.log(`Get users full name ${user.fullName}`);

console.log();

// Define object property
let obj = {
  name: "Peter",
  age: 10,
  toString() {
    return `${this.name} :: ${this.age}`;
  }
};

Object.defineProperty(obj, "info", {
  get() {
    return `${this.name} ${this.age}`;
  },
  set(value) {
    [this.name, this.age] = value.split();
  }
});
console.log(`Object info `, obj.info);
console.log(obj.toString());

// Getters/setters can be used as wrappers over “real” property values to gain more control over them.
// For instance, if we want to forbid too short names for user, we can store name in a special property _name. And filter assignments in the setter:

console.log();

user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
console.log(user.name); // Pete
user.name = "";

console.log();
console.log();

// Crete a function object with two properties
function User(name, birthday) {
  this.name = name;
  //this.age = age;
  this.birthday = birthday;

  this.toString = function() {
    return `->${this.name} :: ${this.age} ${this.birthday.getFullYear()}<-`;
  };

  // But sooner or later, things may change. Instead of age we may decide to store birthday, because it’s more precise and convenient:
  Object.defineProperty(this, "age", {
    get() {
      let today = new Date().getFullYear();
      return today - this.birthday;
    }
  });
}

let john = new User("John", new Date("1988,31,3"));
console.log(john.toString());
console.log(john.birthday);
console.log(john.age);
