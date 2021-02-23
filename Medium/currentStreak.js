/*
Create a function that takes the current day (e.g. "2019-09-30"), an array of date objects and returns the "current streak" (i.e. number of consecutive days in a row).

Examples
currentStreak("2019-09-23", [
 {
 date: "2019-09-18"
 },
 {
 date: "2019-09-19"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 3

currentStreak("2019-09-25", [
 {
 date: "2019-09-16"
 },
 {
 date: "2019-09-17"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 0
Notes
The array of dates is sorted chronologically.
The today parameter will always be greater than or equal to the last date in the array.
An empty array should return 0.
*/

function currentStreak(today, datesArray /*args*/) {
  let newArr = [];
  let count = 0;

  if (datesArray.length === 0) {
    return 0;
  }

  for (let item of datesArray) {
    for (let date in item) {
      newArr.push(+item.date.replace(/[\s-%]/g, ""));
    }
  }

  newArr = newArr.reverse();
  let numToday = +today.replace(/[\s-%]/g, "");

  for (let i = 0; i < newArr.length; i++) {
    if (numToday === newArr[i] + 1) {
      numToday = newArr[i];
      count++;
    }
  }

  // let ex = '2019-09-12'
  // let res = ex.replace(/[\s-%]/g, '')
  return count + 1;
}

exports.solution = currentStreak;
