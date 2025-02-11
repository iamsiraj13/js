// pure recursive

function pure(num, targetNum = 20, rangeArr = []) {
  rangeArr = rangeArr.concat(num);
  if (num === targetNum) return rangeArr;
  return pure(num + 1, targetNum, rangeArr);
}

console.log(pure(10, 20));
