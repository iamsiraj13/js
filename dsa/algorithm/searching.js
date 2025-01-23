/**
 * Find index from an array of your targeted value
 */

function searchIndex(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let result = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let midVal = arr[mid];

    if (midVal === target) return mid;
    if (target > midVal) {
      low = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return -1;
}
const arr = [1, 1, 1, 1, 2];
const target = 1;
console.log(searchIndex(arr, target));

//  [1, 2, 3, 4, 5, 6, 7, 8, 9]     (0+8)/2 = 4
//   l           m           h

//  [1, 2, 3, 4, 5, 6, 7, 8, 9]     (0+8)/2 = 4  if target > mid l = mid+1
//                  l  m      h
