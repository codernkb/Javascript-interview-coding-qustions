let data = { name: "Neeraj", age: 28, skill: "JS" };
let info = { city: "Delhi", skill: "Node" };
data = { ...data, ...info };
console.log(data);
        // skill will change to Node from JS