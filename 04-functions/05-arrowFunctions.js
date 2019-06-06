// Fat Arrow Functions

// let hi = () => {
//        1     2
// console.log('hi')
// }
// 1: we need to set the fat arrow function to a variable
// 2" we use the fat arrow to signify it's a function

// Concise:
// let hi = () => console.log('hi')

// Block body:
// let hi = () => {
//    console.log('hi')
// }



//Normal
function coffee() {
    console.log('coffee');
}

// Fat Arrow  (concise)
let tea = () => console.log('tea');

// Fat Arrow   (block body)
let soup = () => {
    console.log('soup');
}

// Benefits: no 'function' key word
//      not hoisted
//      quicker
//      (conscise only) don't have to bother with a return statement (done automatically (?)) 

let babies = (kitten, puppy) => `I have ${kitten} cats and ${puppy} dogs`;

// console.log(babies(4, 1));


// Concise vs block bodies
let apples = x => `There are ${x} apples`;
console.log(apples(10));

let oranges = (x) => {
    return(`There are ${x} oranges, also`);
}
console.log(oranges(10));
