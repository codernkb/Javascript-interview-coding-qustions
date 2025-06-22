console.log(a)
var a = 10;
// Output: undefined 
// var declarations are hoisted to the top of their scope, but initialized as undefined

console.log(b)
let b = 10;
// Output: Uncaught ReferenceError: b is not defined
// let declarations are not hoisted in the same way as var, they are in a "temporal dead zone" until initialized

console.log(c)
const c = 10;
// Output: Uncaught ReferenceError: c is not defined
// const declarations are also not hoisted in the same way as var, they are in a "temporal dead zone" until initialized