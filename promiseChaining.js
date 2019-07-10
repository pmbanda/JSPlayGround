"use strict";

let promise = new Promise(function(resolve, reject) {
  resolve(1);
})
  .then(function(result) {
    console.log(result); // 1
    return new Promise((resolve, reject) => resolve(result * 2));
  })
  .then(function(result) {
    console.log(result); // 1
    return new Promise((resolve, reject) => reject(new Error("Caught Error")));
  })
  .then(function(result) {
    console.log(result); // 1
    return new Promise((resolve, reject) => resolve(result * 2));
  })
  .catch(err => {
    console.log(`error caught ${console.log(err)}`);
  })
  .finally(console.log(`Cleaning up resources`));
