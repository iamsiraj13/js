// 4 way to clone an array

// method 1

var array_Clone = function (arra1) {
  // Using the slice method to create a shallow copy of the input array
  return arra1.slice(0);
};

console.log(array_Clone([1, 2, 4, 0]));

// method 2

var arr = [1, 2, 3, 4, 5];

var arr2 = Array.from(arr);

// method 3

var arr4 = [...arr];

arr4[0] = 200;

// method 4

var arr5 = arr.filter((x) => true);

arr5[0] = 3000;
