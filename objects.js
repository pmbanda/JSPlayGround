"use strict";

// TODO: ? Object instance creation
let user = new Object(); // Object constructor syntax

// TODO: ? Object creation with no overhead
let fruit = "Apple";
user = {
  name: "John Snow",
  age: 34,
  isAdmin: true,
  "likes birds": true,
  [fruit]: 22
}; // Object literal syntax

console.log(`User `, user);

console.log();

// TODO: ? Display the user property
console.log(`The user name -> ${user["name"]}`);
console.log(`The user age -> ${user.age}`);
console.log(`Is admin -> ${user.isAdmin}`);
console.log(`Bird fan -> ${user["likes birds"]}`);

console.log();

console.log(`Delete property isAdmin......`);
delete user.isAdmin; // Delete the IsAdmin property
console.log(`User `, user);

console.log();

function createUser(name, age, position) {
  return {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    name,
    age,
    position,
    status: null,
    "11": "USA"
  };
}
console.log(createUser("Peter Cussack", 33, "Software Developer"));

// Loop through the objects and determine the key value pairs
console.log();

let person = createUser("John Mantix", 23, "IT Developer");
for (const key in person) {
  if (!person.hasOwnProperty(key)) {
    console.log(`Key:: ${key} contains -> ${person[key]}`);
  }
}

console.log();

console.log(`Is key in object:: ${"name" in person}`); // Key has to be enclosed in double quotes
console.log(`Is key in (+49) object:: ${"+49" in person}`);

console.log();

// TODO: ? loop through the object keys
console.log("Object Key Loop.............");
for (const key of Object.keys(person)) {
  console.log(`Key -> ${key} `);
}

// TODO: ? Determine if an array is an object or an array
console.log();
console.log();

user = {}; // empty object
user.name = "John";
user.surname = "Smith";
console.log("User -> ", user);
// change the name to pete
user.name = "Pete";
console.log("User -> ", user);
// remove the property name from the object
delete user.name;
console.log("User -> ", user);

console.log();

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
let schedule = {};
console.log(`Test Schedule::isEmpty ${isEmpty(schedule)}`);
schedule["8:30"] = "get up";
console.log(`After appending time Schedule::isEmpty ${isEmpty(schedule)}`);

console.log();
console.log();

// TODO: ? Sum the objects properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};
let sum = 0;
for (const key in salaries) {
  if (salaries.hasOwnProperty(key)) {
    sum += salaries[key];
  }
}
console.log(`Salary of all employees ${sum}`);

console.log();
console.log();

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
console.log("Before:: Menu Object");
console.log(menu);

function multiplyNumeric(menu) {
  for (let key in menu) {
    // +Converts the data to Numeric
    if (key && +menu[key]) {
      menu[key] *= 2;
    }
  }
}
console.log();
console.log();

multiplyNumeric(menu);
console.log("After:: Menu Object");
console.log(menu);
