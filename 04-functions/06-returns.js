/**************************
RETURN
***************

let hi = () => {
  return 'hi';
    (1)
};

let newName = hi();
      (2)      (3)

console.log(newName)

1- The keyword that brings our data out of our function
2- We need a new variable to hold the value of the return
3- When called, the function becomes the value of the return



***********/

function capName(name) {
    let capiName = '';
    for (let n in name) {
        if (n == 0) {               // if it's the first letter
            capiName += name[n].toUpperCase();
        } else {
            capiName += name[n].toLowerCase();
        }; 
    };
    // console.log(capiName);
    return capiName;
}
let myName = capName('moLlY');
console.log(myName);    // Molly


let x = () => 3;
let y = (z) => z*2;
console.log(y(x()));    // 6


let cost = (price) => price * 1.3
tip = cost(25)
console.log(tip)
