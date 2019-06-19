"use strict";

let time1 = 0;
let time2 = 0;

// run bench(upperSlice) and bench(upperLoop) each 10 times alternating
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}
console.log("Time of diffSubtract: " + time1 + "ms");
console.log("Time of diffGetTime: " + time2 + "ms");

// we have date1 and date2, which function faster returns their difference in ms?
function diffSubtract(date1, date2) {
  return date2 - date1;
}
// or
function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

console.log();
console.log(`Tasks ... Date Time::`);
console.log();

// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
let date = new Date(2012, 1, 20, 3, 12);
console.log(date);

// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

date = new Date(2012, 0, 3); // 3 Jan 2012
let weekDay = date.getDay();
switch (weekDay) {
  case 0:
    return console.log("SU");
    break;
  case 1:
    return console.log("MO");
    break;
  case 2:
    return console.log("TU");
    break;
  case 3:
    return console.log("WE");
    break;
  case 4:
    return console.log("TH");
    break;
  case 5:
    return console.log("FR");
    break;
  case 6:
    return console.log("SA");
    break;
  default:
    break;
}
