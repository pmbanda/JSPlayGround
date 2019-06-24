"use strict";

// Create a calculator that prompts for an arithmetic expression and returns its result.
// There’s no need to check the expression for correctness in this task.
let a = 2,
  b = 10;
let calculate = eval("a + b");
console.log(`Add ${a} and ${b} -> ${calculate}`);

let foo = eval("(a, b) =>  a * b");
console.log(`Multiplication -> ` + foo(10, 20));

function makeCounter(start, wait) {
  let count = start;

  setInterval(() => console.log(count++), wait);
}

//makeCounter(100, 500);
//makeCounter(3, 200);
//console.log(counter);
let obj = {
  name: "Jamal Mansory",
  position: "DEV",

  hello: function() {
    return `This is the home of the brave`;
  }
};
console.log(obj.hello());
console.log(obj.name);
console.log(obj.position);

{
  // do some job with local variables that should not be seen outside

  let message = "Hello";

  console.log(`Inner block ` + message); // Hello
}
console.log(`Outer block ` + message); // Hello
