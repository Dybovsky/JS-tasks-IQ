/*
Reverse the Odd Length Words
Given a string, reverse all the words which have odd length. The even length words are not changed.

Examples
reverseOdd("Bananas") ➞ "sananaB"

reverseOdd("One two three four") ➞ "enO owt eerht four"

reverseOdd("Make sure uoy only esrever sdrow of ddo length")
➞ "Make sure you only reverse words of odd length"
Notes
There is exactly one space between each word and no punctuation is used.
*/

function reverseOdd(word) {
  let myArr = word.split(" ");
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i].length % 2 !== 0) {
      myArr[i] = myArr[i].split("").reverse().join("");
    }
  }
  return myArr.join(" ");
}

exports.solution = reverseOdd;
