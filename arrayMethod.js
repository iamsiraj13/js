var arr = [3, 4, 5, 6, 7];
var arr2 = [1, 23, 4, 5];

console.log(arr.join(" | "));

// change all elem of arr using this value
//arr.fill(true); // [true, true, true, ture,]

// addition between two array and return new array
var arr3 = arr.concat(arr2);

console.log(Array.isArray(arr));

var arr4 = Array.from(arr);
console.log(arr4);

// array.from create clone of array..
var one = [1, 2];
var two = Array.from(one);

two[0] = 4;

function is_array(input) {
  if (toString.call(input) === "[object Array]") {
    return true;
  } else {
    return false;
  }
}

console.log(is_array([1, 2, 3, 4, 5, 6, 7]));
