/*
A pandigital number contains all digits (0-9) at least once. Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

Examples
isPandigital(98140723568910) ➞ true

isPandigital(90864523148909) ➞ false
// 7 is missing.

isPandigital(112233445566778899) ➞ false
*/

function isPandigital(number /*args*/) {
  let arr = String(number).split("");
  console.log(arr);
  //let nums = ['0','1','2','3','4','5','6','7','8','9']; //your code
  let nums = [];
  for (let i = 0; i < arr.length; i++) {
    if (!nums.includes(arr[i])) {
      nums.push(arr[i]);
    }
    if (nums.length === 10) {
      return true;
    }
  }
  return false;
}

exports.solution = isPandigital;
