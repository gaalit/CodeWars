// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''

//1. filter array and create a new array with all the names
//2. remove & capture the value of the last index
//3. add back the last index with an & before

function list(names) {
  const nameArray = [];
  let last = "";

  for (let n of names) {
    nameArray.push(n.name);
  }

  if (names.length > 1) {
    //remove and capture last value
    last = nameArray.pop();
    return `${nameArray.join(", ")} & ${last}`;
  } else {
    return nameArray.join();
  }
}
