//Anagram Detection

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples:
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"



var isAnagram = (stringA, stringB) => {
    var cleanString = (str) => {
        var str = str.replace(/[^\w]/g).toLowerCase();
        var array = str.split('').sort();
        return array.join('');
    }
    var str1 = cleanString(stringA);
    var str2 = cleanString(stringB);
    return str1 === str2;
}

function isAnagram(stringA, stringB) {
    var cleanString = (str) => {
        var str = str.replace(/[^\w]/g).toLowerCase();
        var array = str.split('').sort();
        return array.join('');
    }
    var str1 = cleanString(stringA);
    var str2 = cleanString(stringB);
    return str1 === str2;
}

console.log(isAnagram("foefet", "toffee"));          // true
console.log(isAnagram("Buckethead", "DeathCubeK"));  // true
