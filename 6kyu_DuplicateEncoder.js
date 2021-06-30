// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

const duplicateEncode = (word) => {
  const array = word.toLowerCase().split("");
  const obj = {};
  const enco = [];

  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = i;
  }

  for (let letter of array) {
    array.indexOf(letter) === obj[letter] ? enco.push("(") : enco.push(")");
  }
  return enco.join("");
};

console.log(duplicateEncode("Success"));
