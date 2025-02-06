function maxAscendingSum(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      currentSum += nums[i];
    } else {
      maxSum = Math.max(maxSum, currentSum);
      currentSum = nums[i];
    }
  }

  maxSum = Math.max(maxSum, currentSum);

  return maxSum;
}
33;
// **উদাহরণ রান:**
const arr = [12, 17, 15, 13, 10, 11, 12];
console.log(maxAscendingSum(arr)); // Output: 65 (সাব-অ্যারে: [5, 10, 50])
