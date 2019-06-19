"use strict";

let print = console.log;
// Test based on key value pairs on map object and keys on the set data structure
// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O"
];
print(`Unique set values`);
for (let x of unique(values)) {
  print(x);
}

function unique(arr) {
  // set of unique elements from the array
  return new Set(arr);
}
// Anagrams are words that have the same number of same letters, but in different order.

// For instance:
print("Anagrams walk around");
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

print(aclean(arr));

function aclean(arr) {
  let s = new Set();

  for (let word of arr) {
    // split the word by letters, sort them and join back
    let sorted = word
      .toLowerCase()
      .split("")
      .sort()
      .join(""); // (*)
    s.add(sorted);
  }
  return Array.from(s);
  //return Array.from(map.values());
}

print("..........");
let obj = {
  name: "Jamal Mansory",
  age: 20,
  position: "Rapper"
};
print(Object.keys(obj));
print(Object.values(obj));

print("..............");
print("Create an Object with double prices from the existing one");
let prices = {
  banana: 1,
  orange: 2,
  meat: 4
};

let doublePrice = Object.entries(prices);

function doublePrices() {}

//
