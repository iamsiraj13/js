let s = "anagr   am";
let t = "nagaram";

function isAnagram(s, t) {
  const normalizeS = s.replace(/[^\w]/g, "").toLowerCase();
  const normalizeT = t.replace(/[^\w]/g, "").toLowerCase();
  if (normalizeS.length !== normalizeT.length) return false;

  const hashmap = {};
  for (char of normalizeS) {
    hashmap[char] = (hashmap[char] || 0) + 1;
  }
  console.log(hashmap);
  for (char of normalizeT) {
    if (!hashmap[char]) return false;
    hashmap[char]--;
  }

  return true;
}
console.log(isAnagram(s, t));
