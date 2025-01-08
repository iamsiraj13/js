var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// insert an element in last index
arr.push(9);

// remove last element of and array
arr.pop();

// remove first element of and array
arr.unshift(9);

// shift() to remove first element from array
arr.shift();

// insert 9 in 3 index without replace existing value
arr.splice(3, 0, 9);

// remove exiting index value and insert new value
arr.splice(3, 1, 44);
console.log(arr);
