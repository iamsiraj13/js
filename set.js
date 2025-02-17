/**
 * Set is another javascript data structure
 */

const mySet = new Set();

mySet.add("s");
mySet.add("i");
mySet.add("r");
mySet.add("a");
mySet.add("j");
mySet.add("u");
mySet.add("l");
console.log(mySet.has("a"));
console.log(mySet.delete("a"));
console.log(mySet.has("a"));
for (const x of mySet.entries()) {
  console.log(x);
}
