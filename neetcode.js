function containsDuplicate(nums) {
  let hashmap = {};
  for (let char of nums) {
    hashmap[char] = (hashmap[char] || 0) + 1;
  }
  for (let key in hashmap) {
    console.log(key);
    if (hashmap[key]) {
      return true;
    }
  }
  console.log(hashmap);
  return false;
}
console.log(containsDuplicate([1, 2, 3, 1]));
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
// console.log(containsDuplicate([1, 2, 3, 4]));
