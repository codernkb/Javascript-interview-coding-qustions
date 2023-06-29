let data = { name: "Neeraj", age: 28, skill: "JS" };
let info = { city: "Delhi" };
data = { data, ...info };
console.log(data);
        // {name:"Neeraj", age:28, skill:"JS"}, city:'Delhi'