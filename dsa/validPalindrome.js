/**
 *A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
 */
// how to use multiple pointer

var isPalindrome = function (s) {
  const normalizeStr = s.replace(/[\W_]/g, "").toLowerCase();

  let left = 0;
  let right = normalizeStr.length - 1;
  while (left < right) {
    if (normalizeStr[left] !== normalizeStr[right]) return false;
    left++;
    right--;
  }
  return true;
};

console.log(isPalindrome("race_ a car"));
console.log(isPalindrome("eye"));
console.log(isPalindrome(" A man, a plan, a canal: Panama"));
