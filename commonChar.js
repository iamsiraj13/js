/**
 * Given a string array words, return an array of all characters that show up in all
 *  strings within the words (including duplicates). You may return the answer in
 *  any order.

Example 1:

Input: words = ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: words = ["cool","lock","cook"]
Output: ["c","o"]
 
 */
var commonChar = function () {
  let words = ["bella", "label", "roller"];

  let baseFreq = {};

  for (let ch of words[0]) {
    baseFreq[ch] = (baseFreq[ch] || 0) + 1;
  }
  console.log("Step 1 - baseFreq:", baseFreq);

  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    let currFreq = {};

    for (let ch of word) {
      currFreq[ch] = (currFreq[ch] || 0) + 1;
    }

    console.log(`Step 2 - freq of "${word}":`, currFreq);

    for (let ch in baseFreq) {
      if (currFreq[ch]) {
        baseFreq[ch] = Math.min(baseFreq[ch], currFreq[ch]);
      } else {
        delete baseFreq[ch];
      }
    }

    console.log("Updated baseFreq:", baseFreq);
  }

  let result = [];

  for (let ch in baseFreq) {
    for (let i = 0; i < baseFreq[ch]; i++) {
      result.push(ch);
    }
  }

  console.log("Final result:", result);
};

console.log(commonChar());
