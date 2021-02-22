/*
Create a function that takes an angle in radians and returns the corresponding angle in degrees.

Examples
radiansToDegrees(1) ➞ 57.29577951308232

radiansToDegrees(20) ➞ 1145.9155902616465

radiansToDegrees(50) ➞ 2864.7889756541163
*/

function radiansToDegrees(radian /*args*/) {
  return (radian * 180) / 3.14159265358979323846; //your code
}

exports.solution = radiansToDegrees;
