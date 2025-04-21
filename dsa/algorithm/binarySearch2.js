// binary search / Divide and conquer
// array must be sorted

function searchElmIndex(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    let midVal = arr[mid];

    if (midVal === target) return mid;
    if (target > midVal) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}

const nums = [1, 3, 5, 6],
  target = 2;
console.log(searchElmIndex([1, 3, 5, 7, 10], 9));
