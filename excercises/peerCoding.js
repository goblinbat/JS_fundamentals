let stringExample = 'string';
let numberExample = 0;
let boolExample = true;
let conditionExample = 0;

// typeof
// check type and spit out appropriate string
// "this is a boolean"
// "this is a string"
// "this is a number"

let x = 10

if (typeof x == typeof 'd') {
    console.log('this is a string');
} else if (typeof x == typeof 4) {
    console.log('this is a number');
} else if (typeof x == typeof true) {
    console.log('this is a boolean');
} else {
    console.log("i don't know what that is");
}



// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.
// Examples
// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"

names = ['dot', 'acorn', 'apostrophe', 'chip']
amnesty = ['duck', 'aubrey', 'mama', 'ned']
function secretName(arr) {
    first = [];
    arr.forEach(n => first.push(n.charAt(0).toUpperCase()));
    return first.join('');
}

console.log(secretName(names));
console.log(secretName(amnesty));
