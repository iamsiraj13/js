function lengthOfLongestSubstring(s) {
  let maxLen = 0;
  let left = 0;
  let right = 0;
  let seen = new Set();

  while (right < s.length) {
    if (!seen.has(s[right])) {
      seen.add(s[right]);
      maxLen = Math.max(maxLen, right - left + 1);
      right++;
    } else {
      seen.delete(s[left]);
      left++;
    }
  }
  return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
/*
    a b c a b c b b  maxLen = 1-> 2->3->3
    a                   
    a b
    a b c 
      b c a


*/



