/**
 * if (condition) {
 *   code
 * } else {
 *   alt code
 * }l
 */

let weather = 75;
if (weather < 60) {
    console.log("wear a jacket");
} else {
    console.log('no jacket necessary');
};


// Challenge 1
let Name = 'Molly'
let name = Name.toLowerCase()
if(name == 'molly') {
    console.log("My name's", Name);
} else {
    console.log("Hello, is your name", Name + "?");
};

// Challenge 2
let name2 = 'aUTuMN'
let ame = name2.replace(name2[0], '').toLowerCase()

if(name2[0] == name2[0].toUpperCase()) {
    console.log(name2[0] + ame)
} else {
    console.log(name2[0].toUpperCase() + ame)
}

// Challenge 3
let age = 23
if(age <= 17) {
    console.log("sorry, you're too young to do anything");
} else if (18 <= age && age < 21) {
    console.log("Yay, you can vote!");
} else if (21 <= age && age < 25) {
    console.log("Yay, you can drink!");
} else {
    console.log("Yay, you can rent a car!");
}
// Above was mine, below is the instructor's, since it's simpler
if(age >= 25) {
    console.log("sorry, you're too young to do anything");
} else if (age >= 21) {
    console.log("Yay, you can vote!");
} else if (age >= 18) {
    console.log("Yay, you can drink!");
} else {
    console.log("Yay, you can rent a car!");
}