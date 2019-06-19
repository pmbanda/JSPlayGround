"use strict";

// variable declaration for name and age
let name = "Jamal Mansory";
let age = 23;
// // print variable with the username and age
console.log(`Hello ${name} you are ${age} years old`);

// // create an object
let obj = {
  firstName: "John",
  lastName: "Doe",
  occupation: "Physical Therapist",
  toString() {
    `Hello I am ${this.firstName} ${this.lastName} and I am a ${
      this.occupation
    }`;
  }
};
console.log(obj);
// // This is the man police
