// check the common element between two array
// if the element exists return true otherwise return false
// input arr1 = [''a','b','c'] , arr2 = [1,2,3,'z']

// time complexity O(n^2)
// space complexity O(1)
let arr1 = ["a", "b", "z"];
let arr2 = [1, 2, 3, "z"];
function isElementExists(arr1, arr2) {
  for (let elm of arr1) {
    if (arr2.includes(elm)) {
      return true;
    }
  }
  return false;
}

console.log(isElementExists(arr1, arr2));

function isExist(arr1, arr2) {
  // flag variable
  let set2 = new Set(arr2);
  return arr1.some((elm) => set2.has(elm));
}

console.log(isExist(arr1, arr2));

// method 3

function ifExits(arr1, arr2) {
  let hasmap = {};

  for (elm of arr2) {
    hasmap[elm] = (hasmap[elm] || 0) + 1;
  }
  for (elm of arr1) {
    if (elm in hasmap) {
      return true;
    }
  }
  return false;
}
console.log(ifExits(arr1, arr2));
