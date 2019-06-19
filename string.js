"use strict";
// Change the console log to a shorter print statement
let print = console.log;

// Capitalize the first letter in the string
function ucFirst(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

let val = "jamal ";
print(`Chracterize the first letter in ${val} -> ${ucFirst(val)}`);

// Evaluate to see if several chatacters exist in a letter
// Results right listed
print(checkSpam("buy ViAgRA now")); // == true
print(checkSpam("free xxxxx")); // == true
print(checkSpam("innocent rabbit")); // == false

function checkSpam(str = "") {
  if (str) {
    return (
      str.toLowerCase().includes("viagra") ||
      str.toUpperCase().includes("XXX") ||
      false
    );
  }
  return "Empty String";
}

// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
// The result of the function should be the truncated (if needed) string.
function truncate(str = "", maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength) + "...";
  }
  return str;
}

print(truncate("What I'd like to tell on this topic is:", 5));

// We have a cost in the form "$120". That is: the dollar sign goes first, and then the  number Create a function extractCurrencyValue(str) that would extract the numeric  value from such string and return it.

function extractCurrencyValue(str) {
  // Extract the currency value
  let money = +str.slice(1); // convert the string to a number
  return money;
}
let c = "$120";
print(
  `Extract currency ${extractCurrencyValue(
    c
  )} type ${typeof extractCurrencyValue(c)}`
);
