/**
 * String reversal
 * --- direction
 *
 * given a string , return a new string with the reversed order of character
 * -- example
 *  reverse('apple) output - elppa
 *  reverse('hello) output - olleh
 *  reverse('!Greetings) output - sgniteerG!
 */

function reverce(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverce("!Greetings"));
// method 2
function revstr2(str) {
  let rev = "";
  for (let char of str) {
    console.log(char);
    rev = char + rev;
  }
  return rev;
}
console.log(revstr2("Hello"));
