/**
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s. 
 * You may return the answer in any order.
Example 1:
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 
 */

function findAnagrams(s, p) {
  const result = [];
  const pCount = {};
  const sCount = {};

  for (let char of p) {
    pCount[char] = (pCount[char] || 0) + 1;
  }

  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    sCount[char] = (sCount[char] || 0) + 1;

    if (right - left + 1 === p.length) {
      if (isSame(pCount, sCount)) {
        result.push(left);
      }

      // Remove leftmost character
      sCount[s[left]]--;
      if (sCount[s[left]] === 0) {
        delete sCount[s[left]];
      }
      left++;
    }
  }

  return result;
}

function isSame(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

console.log(findAnagrams("cbaebabacd", "abc")); // Output: [0, 6]
