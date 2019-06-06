
let person1 = {
    name: 'Macy',
    age: 24,
    canVote: true
}

let person2 = {
    name: 'Felicity',
    age: 38,
    canVote: true
}

let person3 = {
    name: 'Jeremy',
    age: 15,
    canVote: false
}

// constructor functions allow us to create objects on a mass scale (a lot faster than typing each one individually)
// seem to be similar to classes in python?

function Person(name, age, canVote) {
    this.name = name;
    this.age = age;
    this.canVote = canVote;
}

let person4 = new Person('James', 80, true);
console.log(person4);
