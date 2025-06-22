console.log([]+[]);
// output: ""
// Arrays converted to strings are empty, so concatenating two empty arrays results in an empty string.

console.log([] + {});
// output: "[object Object]"
// When an array is added to an object, the array is converted to a string (which is empty) and the object is converted to its string representation.

console.log(!!"false");
// output : true
// The double exclamation mark (!!) converts the string "false" to a boolean value. Since the string is not empty, it evaluates to true.

console.log("2" > "10");
// output : true
// When comparing strings, JavaScript compares them lexicographically (dictionary order). "2" is greater than "10" 
// because it compares the first character of each string ('2' vs '1').

const arr = [1, 2];
arr[10] = 3;
console.log(arr.length);
// output : 11
// When accessing an index that is out of range, JavaScript creates empty slots in the array.

console.log(typeof null);
// output : "object"
// This is a known quirk in JavaScript. The typeof operator returns "object" for null, even though null is not an object.

console.log(3 > 2 > 1);
// output : false
// This expression is evaluated from left to right.
// First, 3 > 2 evaluates to true (which is coerced to 1 in this case).
// Then, 1 > 1 evaluates to false, so the entire expression evaluates to false.

console.log(Math.max() === Infinity);
// output : false
// Math.max() without any arguments returns -Infinity, so the comparison with Infinity is false.
console.log(Math.min() === -Infinity);
// output : false
// Math.min() without any arguments returns Infinity, so the comparison with -Infinity is false.
console.log(Math.max()=== -Infinity);
// output : true
// Math.max() without any arguments returns -Infinity, so the comparison with -Infinity is true.