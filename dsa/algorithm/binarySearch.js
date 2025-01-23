function searchBinary(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[arr[mid]] === target) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

const arr = [1, 1, 1, 1, 2];
const target = 1;

console.log(searchBinary(arr, target));
/**
 *
 * [1, 1, 1, 1, 2]  target 1
 * l   m        h    mid = (0+4)/2 = 2
 *
 *
 *
 *
 */
