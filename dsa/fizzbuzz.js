/**
 *
 * Write a program that prints the number from 1 to 100. But for multiples of three print Fizz insted of the number and for multiples of the five print "Buzz"  for number which are multiples of both three and five print "FizzBuzz"
 */

function fizzbuzz() {
  let result = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz \n";
    } else if (i % 3 === 0) {
      result += "Fizz \n";
    } else if (i % 5 === 0) {
      result += "Buzz \n";
    }
    result += i + "\n";
  }
  return result;
}
console.log(fizzbuzz());
