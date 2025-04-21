/**
 * Given a roman numeral, convert it to an integer
Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 * 
 *  */

var romanToInt = function (s) {
  let sum = 0;
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let str = s.split("");
  console.log(str);

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    let next = str[i + 1];

    if (roman[current] < roman[next]) {
      sum += roman[next] - roman[current];
      i++;
    } else {
      sum += roman[current];
    }
  }
  return sum;
};
const s = "LVIII";
console.log(romanToInt(s));
