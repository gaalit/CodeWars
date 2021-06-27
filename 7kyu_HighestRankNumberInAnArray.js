// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]-- > 3;

const highestRank = (arr) => {
  const uniqueArray = [...new Set(arr)];
  const uniqueObj = {};

  for (let uniqueNum of uniqueArray) {
    uniqueObj[uniqueNum] = [];
  }

  for (let num of arr) {
    for (let uniqueNum of uniqueArray) {
      if (num === uniqueNum) {
        uniqueObj[uniqueNum].push(num);
      }
    }
  }

  for (let numKey in uniqueObj) {
    uniqueObj[numKey] = uniqueObj[numKey].length;
  }

  console.log(uniqueObj.sort((a, b) => a - b));
};
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]));
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]));
