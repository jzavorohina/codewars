// Currying functions: multiply all elements in an array

// To complete this Kata you need to make a function multiplyAll/multiply_all which takes an array of integers as an argument.
// This function must return another function, which takes a single integer as an argument and returns a new array.
// The returned array should consist of each of the elements from the first array multiplied by the integer.

// Example:
// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
// Here's a nice Youtube video about currying, which might help you if this is new to you. (https://www.youtube.com/watch?v=iZLP4qOwY8I)



function multiplyAll(arr) {

  return (m) => {
    if (arr.length < 1) {
      return [];
    }
    return arr.map(item => item * m);

  }
}

// test function
function testEqual(v, e) {
  console.log((v === e) ? `test passed! '${v}' is equal to '${e}'` : `test failed! '${v}' expects equal to '${e}'`);
}
function testEqualArray(v, e) {
  console.log((JSON.stringify(v) === JSON.stringify(e)) ? `test passed! '${v}' is equal to '${e}'` : `test failed! '${v}' expects equal to '${e}'`);
}

testEqual(Array.isArray(multiplyAll([1])(1)), true);
testEqual(multiplyAll([1, 2])(1).length, 2, "array should have the same length as the array passed in as an argument");
testEqualArray(multiplyAll([1, 2, 3])(1), [1, 2, 3]);
testEqualArray(multiplyAll([1, 2, 3])(2), [2, 4, 6]);
testEqualArray(multiplyAll([1, 2, 3])(0), [0, 0, 0]);
testEqualArray(multiplyAll([])(10), [], "should return an empty array");
