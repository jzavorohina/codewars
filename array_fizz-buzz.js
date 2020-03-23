// Fizz Buzz

// Return an array containing the numbers from 1 to N, where N is the parametered value.
// N will never be less than 1 (in C#, N might be less than 1).

// C# ONLY: If N is smaller than or equal to 0, throw an ArgumentOutOfRangeException!
// Replace certain values however if any of the following conditions are met:
//     If the value is a multiple of 3: use the value 'Fizz' instead
//     If the value is a multiple of 5: use the value 'Buzz' instead
//     If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead
// C# method calling example:
// string[] result = FizzBuzz.GetFizzBuzzArray(3); // => [ "1", "2", "Fizz" ]



function fizzbuzz(n) {

  let arr = [];
  for (var i = 1; i <= n; i++) {
    let str = i;
    if (i % 3 == 0 && i % 5 == 0) {
      str = 'FizzBuzz';
    } else if (i % 5 == 0) {
      str = 'Buzz';
    } else if (i % 3 == 0) {
      str = 'Fizz';
    };
    arr.push(str);
  };
  return arr;

}

var expected = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz'];

console.log(fizzbuzz(10));
console.log(JSON.stringify(fizzbuzz(10)));
console.log(JSON.stringify(expected));
console.log((JSON.stringify(fizzbuzz(10)) === JSON.stringify(expected)) ? 'Good!' : 'Fails with 10 numbers!');
