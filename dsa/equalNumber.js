s = "abacbc";
var areOccurrencesEqual = function (s) {
  let hasmap = {};

  for (char of s) {
    hasmap[char] = (hasmap[char] || 0) + 1;
  }
  const values = Object.values(hasmap);
  const siraj = values.every((evr) => evr === values[0]);
  return siraj;
};

areOccurrencesEqual(s);
// function isGoodString(s) {
//   if (s.length === 0) return true; // Edge case for empty string

//   // Count the frequency of each character
//   const frequencyMap = {};
//   for (const char of s) {
//     frequencyMap[char] = (frequencyMap[char] || 0) + 1;
//   }

//   console.log(frequencyMap);

//   // Get the unique frequencies
//   const frequencies = Object.values(frequencyMap);
//   console.log(frequencies);

//   // Check if all frequencies are the same
//   const uniqueFrequencies = new Set(frequencies);
//   console.log(uniqueFrequencies);
//   console.log(uniqueFrequencies.s);
//   return uniqueFrequencies.size === 1;
// }
// const s2 = "abababbcc";

// console.log(isGoodString(s2));

// const obj = {
//   a: 2,
//   b: 2,
//   c: 2,
// };
