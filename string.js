var a = "aZz";
var b = "AzZ";

console.log(a < b);

console.log("1" == 1);

const string1 = "hello";
const string2 = "world";

const compareValue = string1.localeCompare(string2);

console.log(compareValue);

console.log("azz" < "lAA");

var fname = "I am";
var lname = "Sirajul";

var fullname = fname.concat(" ", lname);
console.log(fullname);

// substring

var surname = fullname.substr(2, fullname.length);
console.log(surname);

console.log(surname.charAt(0));

console.log(surname.startsWith("a")); // true

console.log(surname.endsWith(3)); // false

console.log(surname.toUpperCase());
console.log(surname.toLowerCase());
var str = "  sdjflksjdf   slkjdf   sdj   ";

console.log(str.trim());
var str2 = "bangladesh";
//console.log(str2.split(" "));

// how to get string length;

function lengthCheck(str) {
  let length = 0;
  while (true) {
    if (str.charAt(length) == "") {
      break;
    } else {
      length++;
    }
  }
  return length;
}
console.log(lengthCheck("mrsirajul"));
