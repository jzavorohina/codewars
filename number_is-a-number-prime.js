// Is a number prime?

// Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.
// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */
// Assumptions
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
// There are no fancy optimizations required, but still the most trivial solutions might time out.
// Try to find a solution which does not loop all the way up to n.



function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

// test function
function testEqual(v, e) {
    console.log((v === e) ? `test passed! '${v}' is equal to '${e}'` : `test failed! '${v}' expects equal to '${e}'`);
}

testEqual(isPrime(0), false);   // Expected: false
testEqual(isPrime(1), false);   // Expected: false
testEqual(isPrime(2), true);    // Expected: true
testEqual(isPrime(73), true);    // good
testEqual(isPrime(75), false);   // Expected: false
testEqual(isPrime(-1), false);   // Expected: false

testEqual(isPrime(3), true);     // good
testEqual(isPrime(5), true);	  // good
testEqual(isPrime(7), true);     // good
testEqual(isPrime(41), true);     // good
testEqual(isPrime(5099), true);   // good

testEqual(isPrime(4), false);	  // good
testEqual(isPrime(6), false);	  // good
testEqual(isPrime(8), false);	  // good
testEqual(isPrime(9), false);	  // Expected: false, instead got: true
testEqual(isPrime(45), false);    // Expected: false, instead got: true	
testEqual(isPrime(45), false);    // Expected: false, instead got: undefined 	
testEqual(isPrime(-5), false);    // Expected: false, instead got: undefined 		
testEqual(isPrime(-8), false);    // Expected: false, instead got: undefined 	
testEqual(isPrime(-41), false);   // Expected: false, instead got: undefined 
	