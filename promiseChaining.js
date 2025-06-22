Promise.resolve(1)
    .then(x => x+1)
    .then(x => {throw x})
    .catch(x => console.log(x));

    // output: 2
    //errors in promise chain propagate to the nearest catch block
// If there is no catch block, the error will be unhandled and may cause the program to crash.
