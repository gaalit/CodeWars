// Write a function filterLongWords that takes a string sentence and an integer n.

// Return a list of all words that are longer than n.

// Example:

// filterLongWords("The quick brown fox jumps over the lazy dog", 4) = ['quick', 'brown', 'jumps']

// STEPS:

//1. filter through each word
//2. if length of the word is less than n, will be kept in the array

const filterLongWords = (sentence, n) => {
  const arrayOfWords = sentence.split(" ");
  return arrayOfWords.filter((word) => word.length > n);
};
