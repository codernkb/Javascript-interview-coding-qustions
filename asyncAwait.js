async function foo(){
    return await Promise.resolve(42);
}
foo().then(console.log);
        
// Output: 42
// The `await` keyword is used to wait for a promise to resolve before executing the next line of code.