/**
 * একটি sorted array-তে target এর প্রথম এমন অবস্থান (index) বের করো, যেখানে
arr[index] ≥ target হয়।

যেখান থেকে target অথবা তার চেয়ে বড় সংখ্যা শুরু হয়েছে।
 */
const arr = [1, 2, 4, 4, 6, 7];
const target = 4;

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      //to find lower bound
      // if (arr[mid] >= target) {
      // to find upper bound
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

console.log(lowerBound(arr, target));
/**
 * l
 * [1, 2, 4, 4, 6, 7]   mid = 0+5/2 =2  target =4
 *        m        R
 * l
 * [1, 2, 4, 4, 6, 7]   mid = 0+1/2 =0  target =4
 *  M  R
 *
 *
 *
 */
// var maximumCount = function (nums) {
//   let neg = [];
//   let pos = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       neg.push(nums[i]);
//     }
//     if (nums[i] > 0) {
//       pos.push(nums[i]);
//     }
//   }
//   return Math.max(neg.length, pos.length);
// };

// console.log(maximumCount([-2, -1, -1, 1, 2, 3]));

// binary search method

function maximumCount(nums) {
  // প্রথম ধনাত্মক সংখ্যার ইনডেক্স খুঁজে বের করা
  function findFirstPositive() {
    let left = 0,
      right = nums.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] > 0) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    console.log(left);

    return left;
  }

  // শেষ ঋণাত্মক সংখ্যার ইনডেক্স খুঁজে বের করা
  function findLastNegative() {
    let left = 0,
      right = nums.length;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] < 0) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    console.log(left);
    return left;
  }

  // ঋণাত্মক সংখ্যার সংখ্যা = শেষ ঋণাত্মক সংখ্যার ইনডেক্স
  const negCount = findLastNegative();
  console.log(negCount);
  // ধনাত্মক সংখ্যার সংখ্যা = মোট দৈর্ঘ্য - প্রথম ধনাত্মক সংখ্যার ইনডেক্স
  const posCount = nums.length - findFirstPositive();

  // সর্বোচ্চ মান ফেরত দেওয়া
  return Math.max(posCount, negCount);
}

console.log(maximumCount([-2, -1, -1, 1, 2, 3]));

function findFirstGreater(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    console.log(mid);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

console.log(findFirstGreater([1, 3, 3, 5, 7, 9], 4));

function firstGreaterthan(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

console.log(firstGreaterthan([2, 4, 6, 6, 8, 10], 6));

console.log(countOfTarget([2, 3, 3, 3, 5, 7], 3));

function findBigNum(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

console.log(findBigNum([2, 4, 6, 6, 8, 10], 10));

function lowerBound(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  console.log(left);
  return left;
}

function upperBound(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  console.log(left);
  return left;
}

function countOfTarget(arr, target) {
  const lb = lowerBound(arr, target);
  const ub = upperBound(arr, target);
  return ub - lb;
}

const arr1 = [2, 3, 3, 3, 5, 7];
const target1 = 3;

console.log(countOfTarget(arr1, target1));
