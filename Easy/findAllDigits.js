/*
Taking each four digit number of an array in turn, return the number that you are on when all of the digits 0-9 have been discovered. If not all of the digits can be found, return "Missing digits!".

Examples
findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]) ➞ 5057
// digits found:  517-  4-38  29-6  -0

findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]) ➞ 3370
// digits found:  5719  -2-8  3---  --6-  ----  --4-  ----  ---0

findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]) ➞ "Missing digits!"
// digits found:  48-3  --76  ---9  ----  -5--  ----  ----  2---
// 0 and 1 are missing
Notes
The digits can be discovered in any order.
*/

function findAllDigits(arr) {
  let newArr = arr.map(String);
  console.log(newArr);
  let counterArr = [];
  for (let i = 0; i <= newArr.length - 1; i++) {
    for (let j = 0; j <= newArr[i].length - 1; j++) {
      if (!counterArr.includes(newArr[i][j])) {
        counterArr.push(newArr[i][j]);
        if (counterArr.length === 10) {
          newArr = arr.map(Number);
          return newArr[i];
        }
      }
    }
  }
  return "Missing digits!";
}

// //your code

// function findAllDigits(array /*args*/) {
//   let templArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j <= 10; j++) {
//       if (String(array[i]).includes(String(templArray[j]))) {
//         templArray.splice(templArray.indexOf(templArray[j]), 1);

//         if (templArray.length === 0) {
//           return array[i];
//         }
//       }

//       //console.log(typeof array[i], typeof templArray[j])
//     }
//   }
//   return "Missing digits!";
// }

// console.log(findAllDigits([2758,3737,3349,5118,7004,6106,8868,6687,2510,8911])) //6106
// console.log(findAllDigits([3914,9923,8187,1657,4271,9538,3759,4543,3438,1943]))
// console.log(findAllDigits([8452,7326,6786,1893,6546,8714,6699,1361,4891,9797]))
// console.log(findAllDigits([3129,7689,7449,4389,5855,9670,9245,1291,7367,1810]))//9670
// console.log(findAllDigits([7985,7130,4625,7392,4933,7163,7130,2145,1596,6188]))//4625

exports.solution = findAllDigits;
