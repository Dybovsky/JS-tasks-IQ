/*
Create a function that takes an array of strings representing times ('hours:minutes:seconds') and returns their sum as an array of integers ([hours, minutes, seconds]).

Examples
timeSum(["1:23:45"]) ➞ [1, 23, 45]

timeSum(["1:03:45", "1:23:05"]) ➞ [2, 26, 50]

timeSum(["5:39:42", "10:02:08", "8:26:33"]) ➞ [24, 8, 23]
Notes
If the input is an empty array, return [0, 0, 0].




timeSum(["2020 05:39:42", " 2020 10:02:08", "2020 08:26:33"])
*/

function timeSum(dates) {
if(timeSum.length === 0 ) return [0,0,0]
let dates = dates.map(x => )
  let res = 0;
  for (const date of dates) {
    let dateN = Date.parse(date);
    res += dateN;
  }
  console.log(new Date(res));
  //your code
}

exports.solution = timeSum;
