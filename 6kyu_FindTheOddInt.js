// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Steps:

// create an array with unique elements
// filter through

function findOdd(array) {
  const uniqueValuesArray = [...new Set(array)];
  const resultObj = {};
  let resultInt;

  // create object with unique numbers as keys
  for (let numKey of uniqueValuesArray) {
    resultObj[numKey] = [];
  }

  // for each number of the array, push it inside of it's key
  for (let num of array) {
    resultObj[num].push(num);
  }

  for (let num in resultObj) {
    let count = resultObj[num].length;

    if (count % 2 !== 0) {
      resultInt = num;
    }
  }
  return parseInt(resultInt);
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])); // 5);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5])); // -1);
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5])); // 5);
console.log(findOdd([10])); // 10);
