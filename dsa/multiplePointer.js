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
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    }
    if (arr[left] + arr[right] > 0) {
      right--;
    }
    if (arr[left] + arr[right] < 0) {
      left++;
    }
  }
  return undefined;
}
// const arr = [-3, -2, -1, 0, 1, 2, 3];
const arr = [-2, 0, 2, 3];``
console.log(sumZero(arr));
