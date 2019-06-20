"use strict";

/**USed to receive value from the server dynamically */
// Invoke using new Function by passing string arguments
let foo = new Function("a", "b", "return a + b");

console.log(`Invoke new Function -> ${foo(10, 20)}`);

let sayHi = new Function('console.log("::Hello String Param::")');
sayHi(); // Hello

function looper() {
  for (let index = 0; index < 23; index++) {
    console.log(index);
  }
}
console.log();

console.log("Call Looper....");
let bar = new Function(
  "x",
  "for (let index = 1; index < x; index++) {console.log(index);}"
);
bar(10);
