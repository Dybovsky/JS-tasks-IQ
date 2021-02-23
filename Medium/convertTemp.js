/*
Create a function that converts Celcius to Fahrenheit and vice versa.

Examples
convert("35°C") ➞ "95°F"

convert("19°F") ➞ "-7°C"

convert("33") ➞ "Error"
Notes
Round to the nearest integer.
If the input is incorrect, return "Error".
*/

function convertTemp(param /*args*/) {
  if (param.includes("C")) {
    let num = +param.slice(0, param.length - 2);
    //console.log(param1)
    return `${Math.round((num * 9) / 5 + 32)}°F`;
  } else if (param.includes("F")) {
    let num = +param.slice(0, param.length - 2);
    return `${Math.round(((num - 32) * 5) / 9)}°C`;
  }
  return "Error"; //your code
}

exports.solution = convertTemp;
