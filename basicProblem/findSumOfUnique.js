/**
 * এটি একটি আকর্ষণীয় সমস্যা যেখানে তুমি অ্যারে থেকে তবে মাত্র একবার আসা সংখ্যাগুলোর যোগফল বের করবে।
 */

let arr = [10, 20, 30, 20, 10, 40, 50];

function findUnique(arr) {
  let newarr = [];
  let sum = 0;
  for (item of arr) {
    if (!newarr.includes(item)) newarr.push(item);
  }
  for (elm of newarr) {
    sum += elm;
  }

  return sum;
}
console.log(findUnique(arr));
