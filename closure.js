function outer(){
    let x = 10;
    return function inner(){
        console.log(x);
    }
}
let innerFunction = outer();
innerFunction();
// Output: 10
// inner retains access to the variable x from its outer function's scope, demonstrating closure in JavaScript.