/**
 * ---Directions
 *  write a function that returns the number of vowels used in a string. Vowels are the characters 'a','e','i','o','u'
 *
 * --example
 *  vowels("Hi There") output ===> 3
 *  vowels("Why do you ask") output ===> 4
 *  vowels("Why") output ===> 0
 */

function vowels(str) {
  let count = 0;
  const collectedVowels = ["a", "e", "i", "o", "u"];
  //   for (let char of str.toLowerCase()) {
  //     if (collectedVowels.includes(char)) {
  //       count++;
  //     }
  //   }

  //   method 2
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  console.log(count);
}

vowels("Why do you ask");

// method 3
const str2 = "why do you ask";
const count = (str2.match(/[aeiou]/gi) || []).length; // Count vowels
console.log(count);
