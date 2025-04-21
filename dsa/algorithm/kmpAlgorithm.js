/**
 * @kmpAlgorightm
 */
// Example usage:

function buildPrefixTable(s) {
  const table = [0];
  let i = 1;
  let j = 0;
  while (i < s.length) {
    if (s[i] === s[j]) {
      j++;
      table[i] = j;
      i++;
    } else if (j > 0) {
      j = table[j - 1];
    } else {
      table[i] = 0;
      i++;
    }
  }
  console.log(table);
  return table;
}

function strStr(string, subString) {
  if (subString === "") return 0;

  const prefixTable = buildPrefixTable(subString);
  let j = 0;
  let i = 0;
  while (i < string.length && j < subString.length) {
    if (string[i] === subString[j]) {
      i++;
      j++;
    } else if (j > 0) {
      j = prefixTable[j - 1];
    } else {
      i++;
    }
  }
  return j === subString.length ? i - j : -1;
}

const text = "aabaabaaab";
const pattern = "aabaaab";
console.log(strStr(text, pattern));

// console.log(KMPSearch(text, pattern));
