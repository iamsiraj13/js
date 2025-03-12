var nums = [1, 2, 3, 4, 5, 6];

// nums.map(function (elm) {
//   console.log(elm ** 2);
// });

// var res = nums.reduce((prev, cur) => {
//   return prev + cur;
// }, initial value);

var res = nums.reduce((prev, currentValue, currentIndex, arr) => {
  return prev + currentValue;
}, 0);

console.log(res);
