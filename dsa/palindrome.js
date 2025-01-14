/**
 *  check provided string/number is palindrome or not
 *
 *  if palindrome return true otherwise false
 *  non-alphanumeric character should be ignored
 *  -- example "race car" output ""
 */

function palindrom(str) {
  const regex = /[\W_]/g;
  // normalize non alpha-numeric character with regex
  const normalizeStr = str.toLowerCase().replace(regex, "");
  const reverseStr = normalizeStr.split("").reverse().join("");

  return normalizeStr === reverseStr;
}

console.log(palindrom("hello"));
console.log(palindrom("2002"));
