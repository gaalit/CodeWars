// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1

// STEPS:
//1. convert number into a string
//2. convert number to array
//2. reverse the array
//3. convert array back to number
//4. if n was initially negative muplitply by * 1

const reverseNumber = (n) => {
  const nToArray = n.toString().split("").reverse();
  return n < 0 ? parseInt(nToArray.join("")) * -1 : parseInt(nToArray.join(""));
};
