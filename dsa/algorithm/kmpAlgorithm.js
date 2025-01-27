/**
 * @kmpAlgorightm
 */
function computeLPSArray(pattern) {
  console.log(pattern);
  //   console.log(pattern.split("").fill(0));
  const lps = new Array(pattern.length).fill(0);
  console.log(lps);
  let len = 0; // Length of the previous longest prefix suffix
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
      console.log(lps);
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  return lps;
}
// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

console.log(computeLPSArray(pattern));
