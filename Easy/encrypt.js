/*
Make a function that encrypts a given input with these steps:

Input: "apple"

Step 1: Reverse the input: "elppa"

Step 2: Replace all vowels using the following chart:

a => 0
e => 1
i => 2
o => 2
u => 3

// "1lpp0"
Step 3: Add "aca" to the end of the word: "1lpp0aca"

Output: "1lpp0aca"

Examples
encrypt("banana") ➞ "0n0n0baca"

encrypt("karaca") ➞ "0c0r0kaca"

encrypt("burak") ➞ "k0r3baca"

encrypt("alpaca") ➞ "0c0pl0aca"
Notes
All inputs are strings, no uppercases and all output must be strings.
*/

function encrypt(str /*args*/) {
  let res = [];
  let myStr = str.split("").reverse();
  for (let i = 0; i < myStr.length; i++) {
    switch (myStr[i]) {
      case "a":
        res.splice(i, 1, "0");

        break;
      case "e":
        res.splice(i, 1, "1");

        break;
      case "i":
        res.splice(i, 1, "2");

        break;
      case "o":
        res.splice(i, 1, "2");

        break;
      case "u":
        res.splice(i, 1, "3");

        break;

      default:
        res.splice(i, 1, myStr[i]);
    }
  }

  return res.join("") + "aca"; //your code
}

exports.solution = encrypt;
