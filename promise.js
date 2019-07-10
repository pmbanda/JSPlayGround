"use strict";

let promise = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("Server Download Complete..."), 1000);
});

promise.then(
  result => console.log(result), // shows "done!" after 1 second
  error => console.log(error) // doesn't run
);

console.log();
console.log();

promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise.then(
  result => console.log(result), // doesn't run
  error => console.log(error) // shows "Error: Whoops!" after 1 second
);

console.log();
console.log();

promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(() => console.log("Exception handled")); // shows "Error: Whoops!" after 1 second

// Loading the scripts using the promise variant
function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error for ${src}`));

    document.head.append(script);
  });
}

let promise = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"
)
  .then(
    script => console.log(`${script.src} is loaded!`),
    error => console.log(`Error: ${error.message}`)
  )
  .then(script => console.log("One more handler to do something else!"));
