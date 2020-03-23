// Remove duplicates from list

// Define a function that removes duplicates from an array of numbers and returns it as a result.
// The order of the sequence has to stay the same.



function distinct(values) {

    var uniqueValues = [];
    for (var value of values) {
        if (uniqueValues.indexOf(value) === -1) {
            uniqueValues.push(value);
        }
    }
    return uniqueValues;

}

console.log(distinct([1]), [1]);
console.log(distinct([1, 2]), [1, 2]);
console.log(distinct([1, 1, 2]), [1, 2]);
console.log(distinct([1, 1, 3, 3, 3, 5, 2])); 
