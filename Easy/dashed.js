/*
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
*/

function dashed(str /*args*/) {
  let res = [];
  let myStr = str.split("");
  for (let i = 0; i < myStr.length; i++) {
    switch (myStr[i]) {
      case "a":
        res.splice(i, 0, "-a-");

        break;
      case "e":
        res.splice(i, 0, "-e-");

        break;
      case "i":
        res.splice(i, 0, "-i-");

        break;
      case "o":
        res.splice(i, 0, "-o-");

        break;
      case "u":
        res.splice(i, 0, "-u-");

        break;
      case "A":
        res.splice(i, 0, "-A-");

        break;
      case "E":
        res.splice(i, 0, "-E-");

        break;
      case "I":
        res.splice(i, 0, "-I-");

        break;
      case "O":
        res.splice(i, 0, "-O-");

        break;
      case "U":
        res.splice(i, 0, "-U-");

        break;
      default:
        res.splice(i, 0, myStr[i]);
    }
  }

  return res.join("");
}

exports.solution = dashed;
