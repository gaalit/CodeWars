// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

const getMiddle = (s) => {
  const array = [...s];
  const l = array.length;

  if (l % 2 === 0) {
    const firstHalf = array.slice(0, l / 2);
    const secondHalf = array.slice(l / 2);
    return firstHalf[firstHalf.length - 1] + secondHalf[0];
  } else {
    return array[(l - 1) / 2];
  }
};

console.log(getMiddle("test")); //should return "es"

console.log(getMiddle("testing")); //should return "t" 7 ;3

console.log(getMiddle("middle")); //should return "dd"

console.log(getMiddle("A")); //should return "A"
