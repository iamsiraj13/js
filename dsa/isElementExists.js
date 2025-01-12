// check the common element between two array
// if the element exists return true otherwise return false
// input arr1 = [''a','b','c'] , arr2 = [1,2,3,'z']

let arr1 = ["a", "b", "z"];
let arr2 = [1, 2, 3, "z"];
function isElementExists(arr1, arr2) {
  for (let elm of arr1) {
    if (arr2.includes(elm)) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isElementExists(arr1, arr2));
