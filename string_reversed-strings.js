// Reversed Strings

// Complete the solution so that it reverses the string value passed into it.

// Examples: 
// solution('world') ==> returns 'dlrow'



function stringReverse(str) {

    var stringSplit = str.split("");          // Use the split () method to get the array from the string.
    var arrayReverse = stringSplit.reverse(); // Use the reverse () method to flip the elements in the resulting array.
    var arrayJoin = arrayReverse.join("");    // Use the join () method to connect the elements of the array.
    return arrayJoin;                         // Return the inverted string.

}

console.log(stringReverse("hello"));

// Variant from stream (short code)
// function solution(str){
//     return str.split("").reverse().join("");
// }
// console.log(solution("hello"));
