let data = { name: "Neeraj", age: 28, skill: "JS" }
let info = { city: "Delhi", mail: "nkb.coder@gmail.com" }
// merge 2 object
data = { ...data, ...info }
console.log(data);
        // both object merged