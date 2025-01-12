// count the characters
// input = string 'Hello'
// output - { h:1, e:1,l:2, o:1 }

/**
 * @question
 * should i consider capital heller and small letter
 * will it accept number??
 * what about null or empty?
 *
 * time complexity Big O(n)
 * space complexity Bin O(n)
 */

function countCharacter(str) {
  // creating an object for tracking the frequency of element
  const hashmap = {};
  const normalize = str.toLowerCase().replaceAll(" ", "");

  // looping the input and generalize the case
  for (let i = 0; i < normalize.length; i++) {
    // if there is any space escape it
    // if (normalize[i] === " ") continue;
    const char = normalize[i];
    // ternary
    hashmap[char] = (hashmap[char] || 0) + 1;
  }

  return hashmap;

  // check if the element exists on the object increment the existent count
  // if not present assign the value 1;
  //finaly return the result
}

console.log(countCharacter("tania"));
