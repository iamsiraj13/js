/**
 * Given a string s, find the length of the longest 
substring
 without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3 

Example 2:
Input: s = "bbbbb"
Output: 1 

Example 3:
Input: s = "pwwkew"
Output: 3
 */
const s = "pwwkew";
function lengthOfLongestSubstring(s) {
  let i = 0;
  let j = 0;
  let maxlen = 0;
  let uniqueSet = new Set();
  while (i < s.length) {
    if (!uniqueSet.has(s[i])) {
      uniqueSet.add(s[i]);
      maxlen = Math.max(maxlen, uniqueSet.size);
      i++;
    } else {
      uniqueSet.delete(s[j]);
      j++;
    }
  }
  return maxlen;
}
console.log(lengthOfLongestSubstring(s));

// algorithm
// "pwwkew"
// [p]  len=1  maxlen=3
// [pw] len=2
// [] len=0
// [w] len=1
// [wk] len=2
// [wke] len=3
// [kew] len=3
