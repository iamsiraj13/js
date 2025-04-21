/**
 * যখন array-তে duplicate থাকে, তখন শুধু arr[mid] === target পেলেই return করলে হবে না —
তোমাকে দেখতে হবে এটা সবার প্রথম কিনা।
 */

// function firstOccurrence(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;
//   let result = 0;
//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);
//     if (arr[mid] === target) {
//       result = mid;
//       right = mid - 1;
//     }

//     if (arr[mid] < target) {
//       left = mid + 1;
//     }
//     if (arr[mid] > target) {
//       left = mid - 1;
//     }
//   }
//   return result;
// }
// console.log(firstOccurrence([2, 4, 4, 4, 5, 6], 4)); // Output: 1

/**
 *
 * l
 * 2, 4, 4, 4, 5, 6    mid = (0+5)/2 =2
 *       m        r
 * l
 * 2, 4, 4, 4, 5, 6    mid = (0+1)/2 =0
 * m  r
 *    l
 * 2, 4, 4, 4, 5, 6    mid = (1+1)/2 =1
 *    m
 *    r
 *
 */

function lastOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      result = mid;
      left = mid + 1;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    }
    if (arr[mid] > target) {
      right = mid - 1;
    }
  }
  return result;
}
console.log(lastOccurrence([2, 4, 4, 4, 5, 6], 4));
