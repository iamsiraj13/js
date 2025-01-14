/**
 * Write a function which accept two arrays and check every value of the first array has it's corresponding in second array
 * The frequency value must be same
 *  -- Example
 * isSame([1,2,4,5] , [3,5,6,10]) // false
 * isSame([1,2,4,5] , [3,4,5,2]) // true
 *
 *
 *  time complexity
 * O(n * (m + n)) -> O(n * n) -> O(n^2)
 *
 * space complexity O(1)
 */
function isSame(arr1, arr2) {
  // checking array length
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i]);

    // we haven't found the index
    if (index === -1) {
      return false;
    } else {
      arr2.splice(index, 1);
    }
  }
  return true;
}

console.log(isSame([1, 2, 4, 1], [1, 4, 5, 2]));

// 1 -1 (remove 1) [4, 5, 2]
// 2 -2 (remove 2) [4, 5]
// 4 -4 (remove 4) [5]
// 5 -5 (remove 5) []

function isSame2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const hashTable = {};
  const hashTable2 = {};

  for (let num of arr1) {
    hashTable[num] = (hashTable[num] || 0) + 1;
  }

  console.log(hashTable);

  for (let num of arr2) {
    hashTable2[num] = (hashTable2[num] || 0) + 1;
  }

  for (let elm in hashTable) {
    console.log(elm);
    if (!elm in hashTable2 || hashTable[elm] !== hashTable2[elm]) {
      return false;
    }
  }
  return true;

  console.log({ hashTable }, { hashTable2 });
}

console.log(isSame2([1, 2, 4, 5], [1, 4, 5, 2]));
