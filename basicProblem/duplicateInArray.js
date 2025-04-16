function containDuplicate(nums) {
  const numSet = new Set(nums);
  console.log(numSet);
  for (const num of nums) {
    if (numSet.has(num)) {
      return true;
    }
    numSet.add(num);
  }
  return false;
}
function containDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}

console.log(containDuplicate([1, 2, 3, 1, "sjk"]));
console.log(containDuplicate([1, 2, 3, 4]));
