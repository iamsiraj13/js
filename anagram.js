let str1 = "sirajul";
let str2 = "lujaris";

function isAnagram(str1, str2) {
  // normalize string
  const normalizeStr1 = str1.replace(/[^\w]/g, "").toLowerCase();
  const normalizeStr2 = str2.replace(/[^\w]/g, "").toLowerCase();

  if (normalizeStr1.length !== normalizeStr2.length) return;

  const hashmap = {};

  for (char of normalizeStr1) {
    hashmap[char] = (hashmap[char] || 0) + 1;
  }
  console.log(hashmap)
  

  // trac frequency of character
  // then check char in hashmap
  for (char of normalizeStr2) {
    if (!hashmap[char]) return false;
    hashmap[char]--;
  }
  return true;
}

console.log(isAnagram(str1, str2));
