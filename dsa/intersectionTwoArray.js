/**
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 *  Each element in the result must be unique and you may return the result in any
 *  order.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 */

// method one using set
// time complexity O(n)
// function intersection(num1, num2) {
//   let set1 = new Set(num1);
//   let set2 = new Set(num2);

//   let result = [];
//   for (let num of set2) {
//     if (set1.has(num)) {
//       result.push(num);
//     }
//   }
//   return result;
// }
// console.log(intersection([1, 2, 2, 1], [2, 2]));

function intersection2(num1, num2) {
  num1.sort((a, b) => a - b);
  num2.sort((a, b) => a - b);

  let result = [];

  let p1 = 0,
    p2 = 0;
  while (p1 < num1.length && p2 < num2.length) {
    if (num1[p1] === num2[p2]) {
      if (result.length === 0 || result[result.length - 1] !== num1[p1]) {
        result.push(num1[p1]);
      }
      p1++;
      p2++;
    } else if (num1[p1] < num2[p1]) {
      p1++;
    } else {
      p2++;
    }
  }
  return result;
}
console.log(intersection2([1, 2, 2, 1], [2, 2]));

function intersect(num1, num2) {
  num1.sort((a, b) => a - b);
  num2.sort((a, b) => a - b);

  let result = [];

  let p1 = 0,
    p2 = 0;
  while (p1 < num1.length && p2 < num2.length) {
    if (num1[p1] === num2[p2]) {
      result.push(num1[p1]);
      p1++;
      p2++;
    } else if (num1[p1] < num2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }
  return result;
}
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
