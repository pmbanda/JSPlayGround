"use strict";
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased
let print = console.log;

let word = "my-short-string";
print(`Camelize the word ${word} -> ${camelize(word)}`);
let empty = "";
print(`Assign an empty word`);
print(`Camelize the word ${empty} -> ${camelize(empty)}`);

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

print(`Filtered array is -> `, filtered);

function filterRange(arr, a, b) {
  return arr.filter((value, index) => value >= a && value <= b);
}

function camelize(str = "") {
  if (str === "" || str === null || !str) {
    return "Empty String!";
  }
  return str
    .split("-") // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
