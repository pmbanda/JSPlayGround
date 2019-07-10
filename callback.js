"use strict";
console.log(`Example of asynchronous call execution`);
// Example of asynchronous callback calls
function loadScript(path, callback) {
  // delay the script
  console.log(`Start Loading script.....`);
  let timerId = setTimeout(() => {
    callback(path);
  }, 6000);
}

// Invoke the function with the callback as an argument
loadScript("/script/path/mansory....", x =>
  console.log(`Finish Loading script..{ ${x} }`)
);

// Loop counter to proceed with the execution synchronously
console.log(`Initiate counter...`);
for (let i = 0; i < 10; i++) {
  console.log(`Count :: ${i}`);
}
console.log();

console.log();
console.log();

// error implement
// check and implement error on a callback

// The first argument of the callback is reserved for an error if it occurs. Then callback(err) is called.
// The second argument (and the next ones if needed) are for the successful result. Then callback(null, result1, result2…) is called.

function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}
// Real callback scenario on a real script

// function loadScript(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;
//   script.onload = () => callback(script);
//   document.head.append(script);
// }

// loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
//   script => {
//     console.log(`Cool, the ${script.src} is loaded`);
//     console.log(_); // function declared in the loaded script
//   }
// );

// Callback hell
// loadScript(
//   "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
//   script => {
//     console.log(`Cool, script 1 is loaded`);

//     loadScript(
//       "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
//       script => {
//         console.log(`Cool, script 2 is loaded`);
//       }
//     );
//   }
// );

// handling errors in callbacks
// error first callback style
// function loadScriptErrorImplement(src, callback) {
//   let script = document.createElement("script");
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Script load error for ${src}`));

//   document.head.append(script);
// }

// loadScriptErrorImplement("/my/script.js", function(error, script) {
//   if (error) {
//     // handle error
//   } else {
//     // script loaded successfully
//   }
// });
