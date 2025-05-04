// Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0)
//  is often equivalent to true, and 0 is often equivalent to false.
// Create a function that returns the opposite of the given boolean, as a number.
const oppositeBool = value => value ? 0 : 1;
console.log(oppositeBool(true));
console.log(oppositeBool(false));
console.log(oppositeBool(1));
console.log(oppositeBool(0));
console.log(oppositeBool("hello"));
console.log(oppositeBool(""));