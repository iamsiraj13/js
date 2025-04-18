/**
 * Given an array of positive integers nums and a positive integer target,
 *  return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
Example 1:

Input: target = 7, nums = [2,3,1,2,3,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 */
// const nums = [2, 3, 1, 2, 3, 4, 3]
const nums = [1, 1, 1, 1, 1, 1];
const target = 7;
function minSubArrayLen(target, nums) {
  let result = Infinity;
  let left = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      result = Math.min(result, i + 1 - left);
      sum -= nums[left];
      left++;
    }
  }
  result = result === Infinity ? 0 : result;
  return result;
}
console.log(minSubArrayLen([4, 4], target));

// [2,3,1,3,4,3] target 7
// [2,3,1,3] >=7  len =4   minlen =4
// [3,1,3] >=7  len =3   minlen =3
// [1,3,4] >=7  len =3   minlen =3
// [3,4] >=7  len =2   minlen =2
// [3,4] >=7  len =2   minlen =2

function newMinSubArray(nums, target) {
  let result = Infinity;
  let left = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum > target) {
      sum -= nums[left];
      left++;
    }
    if (sum === target) {
      result = Math.min(result, i + 1 - left);
    }
  }
  return result === Infinity ? 0 : result;
}

console.log(newMinSubArray([4, 4], 1));
