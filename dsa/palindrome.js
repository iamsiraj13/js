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
  // const reverseStr = normalizeStr.split("").reverse().join("");

  return normalizeStr !== str;
}

console.log(palindrom("hello"));
console.log(palindrom("121"));

function isPalindrome(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let reversedHalf = 0;
  while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}

// Example usage:
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

function newPalindrome(s) {
  const normalStr = s.replace(/[^\w_]/g, "").toLowerCase();
  let left = 0;
  let right = normalStr.length - 1;
  while (left < right) {
    if (normalStr[left] !== normalStr[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
console.log(newPalindrome("noy_on"));
console.log(newPalindrome("raceacar"));
console.log(newPalindrome("raceacar"));
// raceacar
// aceaca
// ceac
// ea /!== false (not palindrome)
