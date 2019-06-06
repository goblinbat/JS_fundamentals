
/**
* 1) The 'for' keyword
* 2) A variable initialization and declaration. 
* 3) The condition that needs to be met in order to end the loop.
* 4) This is where the number is going to update. This one is saying each time this loop runs, update i by one. 
* 5) Inside of the code block for the loop, refers to the current value of the variable for that loop 
*/
//  (initialization ; stopping condition; iteration statement)
for (let i = 0; i < 10; i++) {
//*(1)   (2)    (3)     (4)
  console.log(i); // 0 1 2 3 4 5 6 7 8 9
//       (5)
}

const vacationSpots = [
    'Florence, IT', 'Copenhagen, DN', 'Istanbul, TK'
]

for(let i = 0; i < 4; i++) {
    console.log(vacationSpots[i])
}

for(let i = 0; i<=20; i+=2) {
    console.log(i);
}

for(let i = 10; i >= 0; i--) {
    console.log(i);
}

for(let i = 0; i >=-24; i-=2){
    console.log(i)
}

for (let i=0; i< 11; i++) {
    (i % 15 == 0) ? console.log('FizzBuzz') : (i % 3 == 0) ? console.log("fizz") : (i % 5 == 0) ? console.log("buzz") : console.log(i)
}

let name = 'bat'
for (i=0; i < name.length; i++) {
    console.log(name[i]);
}

let x = 0
for (i=1; i <= 50; i++){
    x+=i
}
console.log(x)

