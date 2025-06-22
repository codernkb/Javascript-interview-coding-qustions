function Animal (){}
Animal.prototype.sound = "Roar";
const lion = new Animal();
console.log(lion.sound);

// Output: Roar 
// The `sound` property is inherited from the `Animal` prototype.

// In JavaScript, when you create an object using a constructor function (like `Animal`),
// the prototype of the object is set to the prototype of the constructor function.