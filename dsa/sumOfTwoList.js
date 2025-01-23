/**
 * Given two arrays of strings list1 and list2, find the common strings with the least index sum.
A common string is a string that appeared in both list1 and list2.
A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

Return all the common strings with the least index sum. Return the answer in any order.

Example 1:
Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
 */
const list1 = ["happy", "sad", "good"];
const list2 = ["sad", "happy", "good"];
function findRestaurant(list1, list2) {
  const indexMap = new Map(); // Store the index of strings in list1
  const result = [];
  let minIndexSum = Infinity; // Initialize with a very large value

  // Populate the map with strings from list1 and their indices
  for (let i = 0; i < list1.length; i++) {
    indexMap.set(list1[i], i);
  }
  console.log(indexMap);

  // Iterate through list2 to find common strings and their index sums
  for (let j = 0; j < list2.length; j++) {
    if (indexMap.has(list2[j])) {
      const i = indexMap.get(list2[j]);

      const indexSum = i + j; // Calculate the index sum

      if (indexSum < minIndexSum) {
        // Found a smaller index sum, update result
        minIndexSum = indexSum;
        result.length = 0; // Clear previous results
        result.push(list2[j]);
      } else if (indexSum === minIndexSum) {
        // If index sum is equal to the minimum, add to result
        result.push(list2[j]);
      }
    }
  }

  return result; // Return the strings with the smallest index sum
}

console.log(findRestaurant(list1, list2));
