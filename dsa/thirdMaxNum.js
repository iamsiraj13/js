/**
 * Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.
Example 1:
 Input: nums = [3,2,1]
Output: 1

Example 2:
Input: nums = [1,2]
Output: 2
 */

function thirdMax(nums) {
  if (nums.length < 3) return Math.max(...nums);
  nums.sort();
  console.log(nums);
  let one = 0;
  let two = 0;
  let three = 0;

  for (elm of nums) {
  }
}

console.log(thirdMax([1, 3, 2, 4, 2, 1]));
