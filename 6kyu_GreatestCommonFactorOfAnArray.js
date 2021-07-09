const greatestCommonFactor = (array) => {
  let max = 0;
  let factors = [];

  // finding all possible factors
  for (let num of array) {
    if (num > max) {
      max = num;
    }
  }
  const f = [...Array(max + 1).keys()];

  // creating an array with all the possible factors for each number
  for (let i = 0; i <= array.length; i++) {
    for (let ff of f) {
      if (array[i] % ff === 0) {
        factors.push(ff);
      }
    }
  }

  // finding the most frequesnt and highest value
  const hashmap = factors.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(hashmap).reduce((a, b) =>
    hashmap[a] > hashmap[b] ? a : b
  );
};
