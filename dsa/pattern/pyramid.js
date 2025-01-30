/**
 * @pyramid_pattern
 * Write a function that accepts a positive number N.
 * The function should console log a pyramid shape
 * with N levels using # characters. Make sure the pyramid has space on
 * both left and right hand sides
 * examples
 *      '   #   '
 *      '  ###  '
 *      ' ##### '
 *      '#######'
 *
 */

function pyramid(n) {
  let mid = Math.floor((2 + n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = "";
    for (let col = 0; col < 2 * n - 1; col++) {
      if (mid - row <= col && mid + row >= col) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}

console.log(pyramid(5));
