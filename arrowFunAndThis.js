const obj = {
    value : 42,
    getValue : () => console.log(this.value)
}
obj.getValue();

// this will be undefined
// because arrow functions do not have their own 'this' context like normal functions
// They inherit 'this' from the parent scope at the time they are defined.