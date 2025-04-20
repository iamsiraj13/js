const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const arr2 = [5, 4, -1, 7, 8];

var maxSubArray = function (nums) {
  let curent_sum = nums[0];
  let max_sum = curent_sum;

  for (let i = 1; i < nums.length; i++) {
    curent_sum = Math.max(curent_sum + nums[i], nums[i]);
    max_sum = Math.max(curent_sum, max_sum);
  }

  return max_sum;
};

console.log(maxSubArray(arr2));
