/**
 * Given an array of strings strs, group the 
anagrams
 together. You can return the answer in any order.
 --Example

 Input: strs = ["eat","tea","tan","ate","nat","bat"]
 Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

 --Example
 Input: strs = [""]
 Output: [[""]]

 --Example
 Input: strs = ["a"]
 Output: [["a"]]
 */
// const strs = ["a"];
// const strs = [""];
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function groupAnagrams(strs) {
  const ht = {};
  for (let elm of strs) {
    console.log(elm);
    const sorted = elm.split("").sort().join(""); // Sort the string
    console.log(sorted);
    if (ht[sorted]) {
      ht[sorted].push(elm); // Add to the existing group
    } else {
      ht[sorted] = [elm]; // Create a new group
    }
  }
  return Object.values(ht);
}

console.log(groupAnagrams(strs));
