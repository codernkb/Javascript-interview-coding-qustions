console.log("1st log in event loop");
setTimeout(function() {
    console.log("2nd log in event loop");
}, 0);
Promise.resolve().then(function() {
    console.log("3rd log in event loop");
});
console.log("4th log in event loop");

// Output: 1st log in event loop
//         4th log in event loop
//         3rd log in event loop
//         2nd log in event loop
// promise callbacks are executed before setTimeout callbacks, even if the timeout is 0 milliseconds.
// This is due to the event loop's handling of the microtask queue (for promises) and the macrotask queue (for setTimeout).
// The macrotask queue is processed before the microtask queue.
// The event loop processes the call stack, then the microtask queue, and finally the macrotask queue.