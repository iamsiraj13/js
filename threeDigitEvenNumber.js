/**
 * Finding 3-Digit Even Numbers
 * 
 * You are given an integer array digits, where each element is a digit. The array may contain duplicates.

You need to find all the unique integers that follow the given requirements:

The integer consists of the concatenation of three elements from digits in any arbitrary order.
The integer does not have leading zeros.
The integer is even.
For example, if the given digits were [1, 2, 3], integers 132 and 312 follow the requirements.

Return a sorted array of the unique integers.

Example 1:
Input: digits = [2,1,3,0]
Output: [102,120,130,132,210,230,302,310,312,320]

Example 2:
Input: digits = [2,2,8,8,2]
Output: [222,228,282,288,822,828,882]

Example 3:
Input: digits = [3,7,5]
Output: []
Explanation: No even integers can be formed using the given digits.
 */

const digits = [2, 1, 3, 0];
var findEvenNumbers = function (digits) {
  const result = new Array();
  const repeats = new Array(10).fill(0);

  for (const digit of digits) {
    repeats[digit]++;
  }

  for (let i = 100; i <= 999; i += 2) {
    const hundreds = Math.floor(i / 100);
    const tens = Math.floor((i % 100) / 10);
    const ones = i % 10;
    let correct = true;

    if (--repeats[hundreds] < 0) {
      correct = false;
    }

    if (--repeats[tens] < 0) {
      correct = false;
    }

    if (--repeats[ones] < 0) {
      correct = false;
    }

    if (correct) {
      result.push(i);
    }

    repeats[hundreds]++;
    repeats[tens]++;
    repeats[ones]++;
  }

  return result;
};

console.log(findEvenNumbers(digits));

// var findEvenNumbers2 = function (digits) {
//   // Create a frequency map for digits
//   let hashmap = new Map();
//   for (let digit of digits) {
//     hashmap.set(digit, (hashmap.get(digit) || 0) + 1);
//   }

//   let result = [];
//   // Check all even numbers from 100 to 999
//   for (let i = 100; i < 1000; i += 2) {
//     // Extract digits
//     let x = i;
//     let a = x % 10; // First digit
//     x = Math.floor(x / 10);
//     let b = x % 10; // Second digit
//     x = Math.floor(x / 10);
//     let c = x; // Third digit

//     // Create a copy of the frequency map for this number
//     let tempMap = new Map(hashmap);

//     // Check if we can form the number using available digits
//     if (tempMap.has(a) && tempMap.get(a) > 0) {
//       tempMap.set(a, tempMap.get(a) - 1);
//       if (tempMap.has(b) && tempMap.get(b) > 0) {
//         tempMap.set(b, tempMap.get(b) - 1);
//         if (tempMap.has(c) && tempMap.get(c) > 0) {
//           result.push(i);
//         }
//       }
//     }
//   }

//   return result;
// };

// Test the function
// console.log(findEvenNumbers2(digits));
