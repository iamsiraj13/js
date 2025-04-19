const arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const k = 3;

function slideWindow(arr, k) {
  const result = [];

  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  result.push(windowSum);

  // baki window gulo
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    result.push(windowSum);
  }

  console.log(result);
}

console.log(slideWindow(arr, k));

// brute force approach
function slidingWindowSumBruteForce(arr, k) {
  const result = [];

  for (let i = 0; i <= arr.length - k; i++) {
    let windowSum = 0;

    for (let j = i; j < i + k; j++) {
      windowSum += arr[j]; // প্রত্যেক উইন্ডোর সব k উপাদান যোগ করছি
    }

    result.push(windowSum);
  }

  return result;
}

console.log(slidingWindowSumBruteForce(arr, k));
// Output: [6, 11, 7, 9, 4, 13, 11]
