/*
Create a function that returns the area of the overlap between two rectangles. The function will receive two rectangles, each with the coordinates of two of its opposite angles.

Examples
overlappingRectangles(
  [{ x: 2, y: 1 }, { x: 5, y: 5 }],
  [{ x: 3, y: 2 }, { x: 5, y: 7 }]
) ➞ 6

overlappingRectangles(
  [{ x: 2, y: -9 }, { x: 13, y: -4 }],
  [{ x: 5, y: -11 }, { x: 7, y: -2 }]
) ➞ 10

overlappingRectangles(
  [{ x: -8, y: -7 }, { x: -4, y: 0 }],
  [{ x: -5, y: -9 }, { x: -1, y: -2 }]
) ➞ 5

Notes
Coordinates can be positive or negative integers.
*/

function overlappingRectangles(rec1, rec2) {
  const left = Math.max(rec1[0].x, rec2[0].x);
  const right = Math.min(rec1[1].x, rec2[1].x);
  const top = Math.min(rec1[1].y, rec2[1].y);
  const bottom = Math.max(rec1[0].y, rec2[0].y);

  const width = right - left;
  const height = top - bottom;

  if (width < 0 || height < 0) return 0;

  return width * height;
}

exports.solution = overlappingRectangles;
