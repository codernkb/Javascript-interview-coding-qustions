const obj = {
    name: 'Alice',
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

const greet = obj.greet;
greet();
// Output: Hello, my name is undefined
// The value of `this` in the `greet` function is determined by how the function is called.
// When `greet` is called as a standalone function, `this` refers to the global object (or undefined in strict mode),
// not the `obj` object. To fix this, we can use `bind`, `call`, or `apply` to set the correct context for `this`.
const boundGreet = obj.greet.bind(obj);
boundGreet();
// Output: Hello, my name is Alice

const context = { name: 'Bob' };
const boundGreetWithContext = obj.greet.bind(context);
boundGreetWithContext();
// Output: Hello, my name is Bob
// The `bind` method creates a new function that, when called, has its `this` keyword set to the provided value.
// This allows us to control the context in which the function is executed, ensuring that `this` refers to the correct object.