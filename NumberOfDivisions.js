// Calculate how many times a number can be divided by a given number.

// Example
// For example the number 6 can be divided by 2 two times:

// 1. 6 / 2 = 3
// 2. 3 / 2 = 1 remainder = 1
// 100 can be divided by 2 six times:

// 1. 100 / 2 = 50
// 2. 50 / 2 = 25
// 3. 25 / 2 = 12 remainder 1
// 4. 12 / 2 = 6
// 5. 6 / 2 = 3
// 6. 3 / 2 = 1 remainder 1

// STEPS:
//1. create a counter
//2. while n is greater (or equal) to divisor, increase counter by 1 and update n to be equal to n divided by divisor
//3. return counter

const divisions = (n, divisor) => {
  let counter = 0;

  while (n >= divisor) {
    counter++;
    n = n / divisor;
  }
  return counter;
};

console.log(divisions(6, 2));
