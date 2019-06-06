// for iterating over values in an object

let student = {
    name: 'peter',
    degree: 'JavaScript',
    week: 1
};
for (item in student) {
    console.log(student[item]);
};


let dogs = ['collie', 'pitbull', 'newfinlander', 'sheltie', 'lab', 'dachshund'];
for (dog in dogs) {
    console.log(dogs[dog]);
};


let students = ['ava', 'maggie', 'franny', 'arthur', 'taylor']
for (name in students) {
    first = students[name][0].toUpperCase();
    newName = students[name].replace(students[name][0], first);
    console.log(newName);
}


let studentName = "uraCiL";
let capNAme = '';
for (let n in studentName) {
    if (n == 0) {               // if it's the first letter
        capNAme += studentName[n].toUpperCase();
    } else {
        capNAme += studentName[n].toLowerCase();
    };
};
console.log(capNAme);