// Palindrome strings

// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
// Implement a function that checks if something is a palindrome.

// Examples:
// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false



function isPalindrome(str) {
  str = String(str).toLowerCase();

  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("anna"));    //   ==> true
console.log(isPalindrome("walter"));  //   ==> false
console.log(isPalindrome(12321));     //   ==> true
console.log(isPalindrome(123456));    //   ==> false
