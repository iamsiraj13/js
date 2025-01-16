const numbers = [1, -2, 3, -4, 5];
const positiveNumbers = numbers.filter((num) => num > 0);

console.log(positiveNumbers);
// Output: [1, 3, 5]

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 19 },
];

const adults = users.filter((user) => user.age >= 18);

console.log(adults);
// Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 19 }]

const letters = ["a", "b", "c", "d"];
const filteredLetters = letters.filter((letter, index) => index % 2 === 0);

console.log(filteredLetters);

// custom filter function implementation
function customFilter(array, callback) {
  const result = []; // নতুন অ্যারে, যেটিতে ফিল্টার করা আইটেমগুলো থাকবে।

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      // যদি শর্ত পূরণ হয়, তাহলে আইটেমটি রেজাল্টে যোগ করুন।
      result.push(array[i]);
    }
  }

  return result; // ফিল্টার করা নতুন অ্যারে রিটার্ন।
}

var two = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9];

var result = two.filter(function (value, index, array) {
  return value !== 8;
});

console.log(result);
