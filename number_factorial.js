// Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!,
// is the product of all positive integers less than or equal to n.
// For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input.
// If input is below 0 or above 12 throw an exception of type

// ArgumentOutOfRangeException (C#)
// or IllegalArgumentException (Java)
// or RangeException (PHP)
// or throw a RangeError (JavaScript)
// or ValueError (Python) or return -1 (C).
// More details about factorial can be found here.



function factorial(n) {

  var result = 1;
  if ((n < 0) || (n > 12)) {
    throw new RangeError("RangeError");
  } else {
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
  }
  return result;

}

console.log("factorial for 0 is 1 = ", factorial(0));
console.log("factorial for 1 is 1 = ", factorial(1));
console.log("factorial for 2 is 2 = ", factorial(2));
console.log("factorial for 3 is 6 = ", factorial(3));
console.log("factorial for n > 12 ", factorial(13));
