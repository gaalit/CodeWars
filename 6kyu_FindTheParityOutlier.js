// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

//  STEPS:
//1. create 2 different arrays; one with even numbers, one with odd numbers
//2. if the length of the even array is 1; return the value at index 0
//3. if not then return the value of index 0 in the odd array.

const findOutlier = (integerArray) => {
  const even = integerArray.filter((num) => num % 2 === 0);
  const odd = integerArray.filter((num) => num % 2 !== 0);

  return even.length === 1 ? even[0] : odd[0];
};
