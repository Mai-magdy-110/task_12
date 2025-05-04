// Create a function that takes an array of
// integers and strings. Convert integers to strings and return the new array.

function concatArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}
console.log(concatArrays([1, 3, 5], [2, 6, 8]));
console.log(concatArrays([7, 8], [10, 9, 1, 1, 2]));
console.log(concatArrays([7,8], []));
console.log(concatArrays([4, 5, 1], [3, 3, 3, 3, 3]));