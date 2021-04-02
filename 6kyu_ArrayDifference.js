// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

//1. filter the first array
//2. verify at what index each element in a is at, if the index is -1, it means it's not present in b
//3. push to new array

const arrayDiff = (a, b) => {
  let resultArray = [];

  for (let num of a) {
    if (b.indexOf(num) === -1) {
      resultArray.push(num);
    }
  }
  return resultArray;
};
