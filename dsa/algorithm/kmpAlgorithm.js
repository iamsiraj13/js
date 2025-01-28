/**
 * @kmpAlgorightm
 */

function computeLPSArray(pattern) {
  const lps = new Array(pattern.length).fill(0);
  let len = 0; // Length of the previous longest prefix suffix
  let i = 1;

  while (i < pattern.length) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }
  console.log(lps);
  return lps;
}

function KMPSearch(text, pattern) {
  const M = pattern.length;
  const N = text.length;

  // Create LPS array
  const lps = computeLPSArray(pattern);

  let i = 0; // Index for text
  let j = 0; // Index for pattern

  while (i < N) {
    if (pattern[j] === text[i]) {
      i++;
      j++;
    }

    if (j === M) {
      console.log(`Pattern found at index ${i - j}`);
      j = lps[j - 1];
    } else if (i < N && pattern[j] !== text[i]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }
}

// Example usage:
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";

// console.log(KMPSearch(text, pattern));
