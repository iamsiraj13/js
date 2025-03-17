/**
 * এটি একটি সাধারণ সমস্যা যেখানে তুমি অ্যারে থেকে সবটি বিজোড় সংখ্যা বের করবে।
 */

let arr = [10, 21, 30, 33, 40, 55];
function findOdd(arr) {
  let orr = [];
  for (item of arr) {
    if (item % 2 === 0) {
      orr.push(item);
    }
  }
  return orr;
}
console.log(findOdd(arr));
