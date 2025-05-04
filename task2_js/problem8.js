// Create a function that takes an array of integers and strings.
//  Convert integers to strings and return the new array.
function ConvertToString(arr) {
    return arr.map( item  =>item.toString());
}
console.log(ConvertToString([1, 2, "a", "b"]));
console.log(ConvertToString(["abc", 123, "def", 456]));
console.log(ConvertToString([1, 2, 3, 17, 24, 3, "a", "123b"]));