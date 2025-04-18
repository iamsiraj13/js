/**
 * Creating pointers or values that correspond to an index or position
 * and move toward the beginning, end or middle based on a certain condition
 * > Very efficient for solving problems with minimal space complexity as well
 */

// [-3, -2, -1, 0, 1, 2, 3]

// function sumZero(arr) {
//   for (let elm of arr) {
//     for (let char of arr) {
//       if (elm + char === 0) {
//         return [elm, char];
//       }
//     }
//   }
//   return undefined;
// }

// const arr = [-3, -2, -1, 0, 1, 2, 3];
// const arr = [1, 2, 3];
// console.log(sumZero(arr));

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    if (sum > 0) {
      right--;
    }
    if (sum < 0) {
      left++;
    }
  }
  return undefined;
}
// const arr = [-3, -2, -1, 0, 1, 2, 3];
const arr = [-2, 0, 2, 3];
``;
console.log(sumZero(arr));

function areThereDuplicate(arr) {
  let hasmap = {};
  for (let elm of arr) {
    hasmap[elm] = (hasmap[elm] || 0) + 1;
  }
  for (let elm in hasmap) {
    console.log(hasmap[elm]);
    if (hasmap[elm] > 1) {
      return false;
    }
  }
  console.log(hasmap);
  return true;
}

const arr1 = [1, 1, 1, 1, 1, 2, 3];
const arr2 = [1, 3, -4, 5];
console.log(areThereDuplicate(arr2));

// using multiple pointer

function isDuplicate(arr) {
  let left = 0;
  let second = left + 1;

  while (left < arr.length) {
    if (arr[left] === arr[second]) {
      return true;
    }
    left++;
    second++;
  }
  return false;
}
console.log(isDuplicate(arr2));
