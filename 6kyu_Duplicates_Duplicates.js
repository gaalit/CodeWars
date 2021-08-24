// You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }
// Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.

// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }
// Rules
// Whenever two keys share the same character, they should be compared numerically, and the larger key will keep that character. That's why in the example above the array under the key "2" contains "A" and "B", as 2 > 1.
// If duplicate characters are found in the same array, the first occurance should be kept.
// Example 1
// input = {
//   "1": ["C", "F", "G"],
//   "2": ["A", "B", "C"],
//   "3": ["A", "B", "D"],
// }

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }

const removeDuplicateIds = (obj) => {
  const keys = Object.keys(obj)
    .map((x) => parseInt(x))
    .sort((x, y) => x - y)
    .reverse();
  const found = [];
  for (key of keys) {
    obj[key] = obj[key].filter((letter) => {
      if (found.includes(letter)) {
        return false;
      } else {
        found.push(letter);
        return true;
      }
    });
  }
  return obj;
};
