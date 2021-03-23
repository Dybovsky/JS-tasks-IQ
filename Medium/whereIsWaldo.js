/*
Return the coordinates ([row, col]) of the element that differs from the rest.

Examples
whereIsWaldo([
 ["A", "A", "A"],
 ["A", "A", "A"],
 ["A", "B", "A"]
]) ➞ [ 2, 1]

whereIsWaldo([
 ["c", "c", "c", "c"],
 ["c", "c", "c", "d"]
]) ➞ [1, 3]

whereIsWaldo([
 ["O", "O", "O", "O"],
 ["O", "O", "O", "O"],
 ["O", "O", "O", "O"],
 ["O", "O", "O", "O"],
 ["P", "O", "O", "O"],
 ["O", "O", "O", "O"]
]) ➞ [4, 0]
Notes
Rows and columns are 0-indexed.
*/

function whereIsWaldo(matrix) {
  for(let i = 0; i < matrix.length; i++){
    let line = matrix[i];
    for(let j = 0; j< line.length; j++){
      if()
    }
  }
  //your code
}

exports.solution = whereIsWaldo;
