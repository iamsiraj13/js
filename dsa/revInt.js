/**
 * Given an integer , return an integer that is the reverse ordering of numbers
 * -- Examples
 *
 *  revInt(14) output - 41
 *  revInt(-15) output -  -51
 *  revInt(-005) output -  -5
 */

var num = -00509;
console.log(num);

function revInt(num) {
  let reverse = num.toString().split("").reverse().join("");
  console.log(reverse);
  if (reverse.endsWith("-")) {
    reverse = "-" + reverse.slice(0, reverse.length - 1);
  }
  return Number(reverse);
}

console.log(revInt(num));
