"use strict";

// Closure example
console.log("Param...Exe");
console.log();

// function invoke
let work = makeWorker();
work();

console.log();

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log();

console.log(counter2());
console.log(counter2());

function makeWorker() {
  let name = "Peter Eugene Mbanda";

  return function() {
    console.log(name);
  };
}

function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}
