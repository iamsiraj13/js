/**
 *Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6 

Example 2: 
Input: nums = [1]
Output: 1 

Example 3: 
Input: nums = [5,4,-1,7,8]
Output: 23 
 */
const nums = [5, 4, -1, 7, 8];
function maxSubArray(nums) {
  let cur_sum = nums[0];
  let max_sum = cur_sum;
  for (let i = 1; i < nums.length; i++) {
    cur_sum = Math.max(cur_sum + nums[i], nums[i]);
    max_sum = Math.max(cur_sum, max_sum);
  }
  return max_sum;
}

console.log(maxSubArray(nums));

// curremt_sum - nums[0]
// max_sum =curremt_sum
//[5, 4, -1, 7, 8]
// [5,4]  cur_sum =9 max_sum =9
// [4,-1] cur_sum=-3 max_sum =9
// [-1,7] cur_sum=-6 max_sum =9
// [7, 8] cur_sum=15 max_sum =15
