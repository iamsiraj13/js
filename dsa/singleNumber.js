var singleNumber = function (nums) {
  let unique = 0;
  for (let num of nums) {
    unique ^= num;
  }
  return unique;
};
nums = [4, 1, 2, 1, 2];

// Example cases
console.log(singleNumber(nums)); // Output: 1
