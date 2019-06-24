"use strict";

/**USed to receive value from the server dynamically */
// Invoke using new Function by passing string arguments
let foo = new Function("a", "b", "return a + b");

console.log(`Invoke new Function -> ${foo(10, 20)}`);

let sayHi = new Function('console.log("::Hello String Param::")');
sayHi(); // Hello

console.log();

console.log("New function manipulating the outer variable....");
let x = 30;
console.log(`x before in the outer ${x}`);

function check() {
  let bar = new Function("x", "for(let i = 0; i < x; i++) {console.log(i);}");
  bar(10);
}

check();
console.log(`x in the outer ${x}`);

console.log("...............");
console.log();
