/**
 * -Check to see if two provided strings are anagram of each other.
 * -One String is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or puntuation. Consider capital letters to be the same as lower case.
 *
 *
 */

let s = "anagram";
let t = "nagaram";
function isAnagram(s, t) {
  let hashtable1 = {};
  let hashtable2 = {};

  const normalizeS = s.replace(/[^\w]/g, "").toLowerCase();
  const normalizeT = t.replace(/[^\w]/g, "").toLowerCase();
  console.log(normalizeS);
  console.log(normalizeT);

  for (char of normalizeS) {
    hashtable1[char] = (hashtable1[char] || 0) + 1;
  }
  for (char of normalizeT) {
    hashtable2[char] = (hashtable2[char] || 0) + 1;
  }
  for (let elm in hashtable1) {
    if (hashtable1[elm] !== hashtable2[elm] || !elm in hashtable2) {
      return false;
    }
  }
  return true;
}
isAnagram(s, t);
