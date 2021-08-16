// Make a program that takes a value (x) and returns
//"Bang" if the number is divisible by 3,
//"Boom" if it is divisible by 5,
//"BangBoom" if it divisible by 3 and 5, and
//"Miss" if it isn't divisible by any of them.

// Ex: Input: 105 --> Output: "BangBoom" Ex: Input: 9 --> Output: "Bang" Ex:Input: 25 --> Output: "Boom"

const multiple = (x) => {
  x % 15 == 0 ? "BangBoom" : m % 3 == 0 ? "Bang" : m % 5 == 0 ? "Boom" : "Miss";
};
