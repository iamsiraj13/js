const words1 = ["a", "ab"];
const words2 = ["a", "a", "a", "ab"];

var countWords = function (words1, words2) {
  let hasmap1 = {};
  let hasmap2 = {};
  let count = 0;

  for (let word of words1) {
    hasmap1[word] = (hasmap1[word] || 0) + 1;
  }
  for (let word of words2) {
    hasmap2[word] = (hasmap2[word] || 0) + 1;
  }

  for (word of words1) {
    if (hasmap1[word] === 1 && hasmap2[word] === 1) {
      count++;
    }
  }
  return count;
};

console.log(countWords(words1, words2));
