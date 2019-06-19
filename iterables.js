"use strict";

// Make the object iterable
let range = {
  from: 1,
  to: 5,

  // function returning an object with next as a property
  [Symbol.iterator]() {
    this.current = this.from;
    this.last = this.to;
    return this;
  },

  next() {
    if (this.current <= this.last) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for (let i of range) {
  console.log(i);
}

let str = "𝒳😂";
for (let char of str) {
  console.log(char); // 𝒳, and then 😂
}
