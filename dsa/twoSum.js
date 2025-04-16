// two sum
// index
//  [3,2,4] target = 6

/**
 *  time O(n)
 * space O(1)
 */
// function twoSum(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(twoSum([9, 4, 8, 3, 2], 6));

var twoSum = function (nums, target) {
  const pairIdx = {};

  for (let i = 0; i < nums.length; i++) {
    let want = target - nums[i];
    if (want in pairIdx) {
      return [i, pairIdx[want]];
    }

    pairIdx[nums[i]] = i;
  }
};

console.log(twoSum([9, 4, 8, 3, 2], 6));

// i	arr[i]	target-arr[i]	hasmap before	hasmap[arr[i]] = i	Found Pair?
// 0	9	        -3	        {}	            {9: 0}	            ❌
// 1	4	         2	        {9: 0}	        {9: 0, 4: 1}	    ❌
// 2	8	        -2	        {9: 0, 4: 1}	{9: 0, 4: 1, 8: 2}	❌
// 3	3	         3	        {...}	        {..., 3: 3}	        ❌
// 4	2	         4	        {..., 4: 1}	    ✅ 4 আগে দেখা → return [1, 4]
