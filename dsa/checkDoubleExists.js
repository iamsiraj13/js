/**
 * Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 

Example 1:
Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]

Example 2:

Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.
 
 */
//
//  [10,2,5,3]    (0+3)/2 = 1
//   i   j           i =0; j=1  10 === j*2 // ture / false
//      i j           i =0; j=1  10 === j*2 // ture / false
const arr = [7, 1, 14, 11];

function checkex(arr) {
  let hashmap = {};
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    hashmap[char] = (hashmap[char] || 0) + 1;
  }

  for (let elm in hashmap) {
    console.log(elm);
  }
  console.log(hashmap);
}

console.log(checkex(arr));

function checkIfExist(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (i === j) {
        return false;
      }
      if (arr[i] == 2 * arr[j] || arr[i] * 2 == arr[j]) {
        return true;
      }
    }
  }
  return false;
}
console.log(checkIfExist(arr));
