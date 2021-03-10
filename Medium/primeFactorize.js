/*
Write a program to find all the prime factors of a given number. The program must return an array containing all the prime factors, sorted in ascending order. Remember that 1 is neither prime nor composite and should not be included in your output array.

Examples
primeFactorize(25) ➞ [5, 5]

primeFactorize(19) ➞ [19]

primeFactorize(77) ➞ [7, 11]
Notes
Output array must be sorted in ascending order
The only positive integer which is neither prime nor composite is 1. Return an empty array if 1 is the input.
*/

function primeFactorize(num) {
  let res = [];
  let i = 2;
  while (num !== 0) {
    if (num % i === 0) {
      res.push(i);
      num = num / i;
      i++;
    }
    i++;
  }

  return res;
}

exports.solution = primeFactorize;

// function primeFactorize(num) {
//   let res = []
//   let i = 2
//   while(num % i !== 0){
//     i++
//   }
//   num = num / i
//   res.push(i)
//   res.push(num)

//   return res;
// }
