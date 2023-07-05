let person = {name:"Neeraj"};
        Object.seal(person);
        // no more values can be added but already present can be modified
        person.name= "Kumar"
        console.log(person)