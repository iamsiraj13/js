const s = "leetcode";

function maxPower(s) {
  let maxLen = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    if (s[right] !== s[left]) {
      left = right;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

// উদাহরণ ইনপুট চেক করা যাক
console.log(maxPower("leetcode")); // 2
console.log(maxPower("abbcccddddeeeeedcba")); // 5

// "leetcodeee";
// algorithm
// "pwwkew"
// [p]  len=1  maxlen=3
// [pw] len=2
// [] len=0
// [w] len=1
// [wk] len=2
// [wke] len=3
// [kew] len=3
