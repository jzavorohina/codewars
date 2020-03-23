// Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.



function findShort(s) {

    let wordsArr = s.split(' ');
    let shortest = Infinity;
    for (let i = 0; i < wordsArr.length; i++) {
        let wordsLength = wordsArr[i].length;
        if (wordsLength < shortest) {
            shortest = wordsLength;
        }
    }
    return shortest;

}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3); 
