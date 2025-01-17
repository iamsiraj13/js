/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 --Example 
 Input: s = "leetcode"
 Output: 0

 Input: s = "loveleetcode"
 Output: 2

 Input: s = "aabb"
 Output: -1
 */
const s = "leetcode";
function firstUniqChar(s) {
  let hashTable = {};

  for (let char of s) {
    hashTable[char] = (hashTable[char] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    const want = s[i];
    if (hashTable[want] === 1) {
      return i;
    }
  }
  return -1;
}

console.log(firstUniqChar(s));
