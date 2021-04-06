// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// STEPS:

// 1. convert text to array, use filter to return a new array with only the values that appear more than once in the original array
// 2. create a new array (uniqueValues) that holds the values of the duplicates (without including them more than once)
// 3. return uniqueValues.length

const duplicateCount = (text) => {
  const array = text.toLowerCase().split("");

  const duplicates = array.filter((letter, index) => {
    return array.indexOf(letter) !== index;
  });
  const uniqueValues = [...new Set(duplicates)];
  return uniqueValues.length;
};

console.log(duplicateCount("aabbcde")); // 2);
console.log(duplicateCount("aabBcde")); // 2,"should ignore case");
console.log(duplicateCount("Indivisibility")); // 1)
