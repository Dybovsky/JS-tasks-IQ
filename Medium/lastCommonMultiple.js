/*
Write a function that returns the least common multiple (LCM) of two integers.

Examples
lcm(9, 18) ➞ 18

lcm(8, 5) ➞ 40

lcm(17, 11) ➞ 187
Notes
Both values will be positive.
The LCM is the smallest integer that divides both numbers such that the remainder is zero.
*/
// let min = Math.min(a, b);
// while (min >= 2) {
//   if (a % min === 0 && b % min === 0) {
//     return (a * b) / min;
//   }
//   min--;
// }
// return a * b;

function lastCommonMultiple(a, b) {
  let min = Math.min(a, b);
  //let min = a > b ? a : b;
  while (true) {
    if (min % a === 0 && min % b === 0) {
      return min;
    }
    min++;
  }
}
exports.solution = lastCommonMultiple;
