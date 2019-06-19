"use strict";

let strLower = "The quick brown fox jumped ovet the lazy dog";
let strUpper = "The quick brown fox jumped ovet the lazy dog";

strLower = strLower.toLowerCase();
strUpper = strUpper.toUpperCase();

// TODO: Determine the code behind the string value
for (let index = 0; index < strLower.length; index++) {
  console.log(
    `${strLower[index]} :: ${strLower.codePointAt(index)} \t ${
      strUpper[index]
    } :: ${strUpper.codePointAt(index)}`
  );
}

console.log();

let accessAllowed = true;

accessAllowed = accessAllowed
  ? "You are allowed access"
  : "You are NOT allowed access";
console.log(accessAllowed);

// Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

// If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “Didn’t know? ECMAScript!”

let jsOfficialName = "ECMASCRIPT";
jsOfficialName =
  jsOfficialName.toLowerCase() === "ecmascript" ? `Right!` : `Didn't know?`;
console.log(jsOfficialName);

// Rewrite this if using the ternary operator '?':
// if (a + b < 4) {
//     result = 'Below';
//   } else {
//     result = 'Over';
//   }
let a = 22,
  b = 34;
let result = a + b < 4 ? "Below" : "Over";
console.log(result);

console.log();

// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.
let login;
let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
    ? "Greeting"
    : login == "Director"
    ? "No login"
    : "";

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  console.log("The time is 12:30");
}

// TODO: User login credential challenge
function getLogin() {
  let password = "",
    credential = "";
  credential = prompt("Who's there?");

  if (credential == null) {
    alert("Canceled");
    return;
  } else {
    credential === "Admin"
      ? (password = prompt("Please enter your password"))
      : credential === ""
      ? alert("Canceled")
      : alert("I dont know you?");
  }

  if (password == null) {
    alert("Canceled");
    return;
  } else {
    password === "TheMaster"
      ? alert("Welcome")
      : password === ""
      ? alert("Cancelled input")
      : alert("Wrong Password");
  }
}
