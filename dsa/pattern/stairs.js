/**
 * Write a funtion that accepts a positive number N.
 * The function should console log a step shape with N levels using #
 * character. Make sure the step has space on the right hand side
 *
 * -- Examples
 *  steps(2)
 *         '# '
 *         '##'
 *  steps(3)
 *         '#   '
 *         '##  '
 *         '### '
 *         '####'
 *
 * col== row => #
 * col > row => #
 */

function steps(n) {
  // for row
  for (let row = 0; row < n; row++) {
    // collumn
    let step = "";
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        step += "#";
      } else {
        step += "-";
      }
    }
    console.log(step);
  }
}
console.log(steps(6));
