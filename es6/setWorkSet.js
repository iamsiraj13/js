let myset = new Set();
myset.add("hello");
myset.add("kire vai");
myset.delete("hello");
console.log(myset.has("hello"));
myset.add("A").add("mang");

console.log(myset.size);
console.log(myset);

let myarr = [1, 2, 3];

// conver array to set
let siraj = new Set(myarr);
console.log(siraj);

// convert set to array
// method 1
let siraj2 = [...siraj];
console.log(siraj2);

console.log(Array.from(siraj));

class SomeClass {}
