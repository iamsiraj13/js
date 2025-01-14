/**
 * --Directions
 * Given a string, return the character that is most commonly used in the string
 *
 * --- Example
 * maxChar(abccccd);
 */
let str = "abc    cccd 222222222222222222";
function maxChar(str) {
  let hashmap = {};

  let maxChar = "";
  let count = 0;
  for (let char of str) {
    if (char === " ") {
      continue;
    }
    hashmap[char] = (hashmap[char] || 0) + 1;
  }

  console.log(hashmap);

  for (char in hashmap) {
    if (hashmap[char] > count) {
      count = hashmap[char];
      maxChar = char;
    }
  }
  console.log(maxChar);
  console.log(max);
  return { maxChar, count };
}
console.log(maxChar(str));
