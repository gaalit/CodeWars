// adjacentElementsProduct([1, 2, 3]); ==> return 6
// Explanation:
// The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.
// adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50

// STEPS:

//1. filter the array and multiply current value by the value to it's right
//2. push result into array
//3. return the max valuein that array

const adjacentElementsProduct = (array) => {
  const multiplicationArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    let rightMultiplication = array[i] * array[i + 1];
    multiplicationArray.push(rightMultiplication);
  }
  return Math.max(...multiplicationArray);
};
