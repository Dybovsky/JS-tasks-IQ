/*
In each input array, every number repeats at least once, except for two. Write a function that returns the two unique numbers.
Examples
returnUnique([1, 9, 8, 8, 7, 6, 1, 6]) ➞ [9, 7]

returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]) ➞ [2, 1]

returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]) ➞ [5, 6]
Notes
Keep the same ordering in the output.

const data = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4]

function count(arr) {
  return arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})
}

console.log(count(data))
*/

function returnUnique(nums /*args*/) {
  let countObj = nums.reduce(
    (prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev),
    {}
  );
  let res = [];
  for (let key in countObj) {
    if (countObj[key] === 1) res.unshift(+key);
    //console.log(key, countObj[key])
  }
  return res;
}
exports.solution = returnUnique;
