/**
 * Given an array of inteagers nums and an integer k, return the total number
 * of sub arrays whose sum equals to k. A sub array is a contiguous not-empty
 * sequence of elements within an array
 *
 * example
 * input: nums = [1,1,1] k = 2
 * output 2
 *
 * input : nums = [1,2,3] k=3
 * output 2
 */







const nums = [1, 2, 3];
const k = 3;


/*
count = 0
[1,2] = 3 count -> 1
[1,2,3] != 3 count ->1
[2,3] !=3 count -> 1
[3]  =3 count 2
*/
let count = 0;
for (let i = 0; i < nums.length; i++) {
  let sum = 0;
  for (let j = i; j < nums.length; j++) {
    sum += nums[j];
    if (sum === k) {
      count++;
    }
  }
}

let arr = [1, 2, 3];
function subArray(arr, k) {
  const hasmap = {
    0: 1,
  };
  let count = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if ([sum - k] in hasmap) {
      console.log(hasmap[sum - k]);
      count++;
    }
    hasmap[sum] = (hasmap[sum] || 0) + 1;
  }
  console.log(hasmap);
  return count;
}

console.log(subArray(arr, 3));

console.log(count);
