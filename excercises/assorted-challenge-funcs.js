function additiveInverse(arr) {
    let list = []
    arr.forEach(h => {list.push(-h)});
    return list
}

function flipWord(word) {
    let wordi = word.toLowerCase();
    let letters = wordi.split("");
    let idrow = letters.reverse().toString();
    idrow = idrow.replace(/,/g, "");
}

function animals(chickens, cows, pigs) {
    // let chickenLegs = chickens * 2;
    // let cowLegs = cows * 4;
    // let pigLegs = pigs * 4;
    // return chickenLegs + cowLegs + pigLegs
    return (chickens *2) + ((cows + pigs) *4)
}

// Create a function that takes an integer and returns an array from 1 to the given number, where:
// If the number can be divided evenly by 4, amplify it by 10 (i.e. return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.
function j(num) {
    k = [];
    for(let i=1; i<=num; i++){
        if(i % 4 == 0){
           l = i * 10;
           k.push(l);
        } else {
            k.push(i);
        }
    };
    return k;
}
console.log(j(9));



let colors = ['pink', 'magenta', 'red', 'orange', 'coral', 'yellow', 'green', 'teal', 'cyan', 'blue', 'indigo', 'violet', 'black', 'gray', 'white'];
let names = ['aubrey', 'barclay', 'courtney', 'duck', 'einstein', 'fred', 'george', 'hollis', 'indrid', 'jack', 'kris', 'luci', 'martha', 'ned']
let ourClass = ['Autumn', 'Ing', 'Adam', 'Molly', 'Owen', 'Natasha', 'Patrick', 'Megan', 'Brian', 'Garret', 'Suraj', 'Cory'] // some possible misspellings

function placement(arr) {       // this will work with arrays with up to 100 items
    let suffix = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th'];
    // let hold = [];
    for (let i=0; i <= arr.length - 1; i++) {
        // hold.push(`${arr[i]} ${i + 1}${suffix[i]}`);
        console.log(`${arr[i]} is ${i+1}${suffix[i]}`);
    }
    // return hold;
}

// placement(colors);
// console.log(placement(colors));
// console.log(placement(names));
// console.log(placement(ourClass));



// Not mine vv
var randomColor = ('#' + Math.floor(Math.random() * 16777215).toString(16));
console.log(randomColor)