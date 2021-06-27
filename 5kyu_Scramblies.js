// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

const scramble = (str1, str2) => {
  const str2Array = str2.split("");

  const filteredArray = str2Array.filter(
    (letter) => str1.indexOf(letter) !== -1
  );

  return str2Array.length === filteredArray.length ? true : false;
};

console.log(scramble("rkqodlw", "world")); // True
console.log(scramble("cedewaraaossoqqyt", "codewars")); // True
console.log(scramble("katas", "steak")); // False
console.log(scramble("aabbcamaomsccdd", "commas"));
