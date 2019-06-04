// Note: don't use hoisting; this lesson is just to teach the concept

console.log(scissors);  // undefined
scissors = "sharp";     // initiallizing variable that has not been declared
console.log(scissors);  // 'sharp'
var scissors            // declaring the already initiallized variable

// Above is an example of hoisting
// JS reads through file twice; first time it looks for declarations, second time initializations (and functions, etc)


b();            // runs b() correctly
console.log(a); // undefined

function b() {
    console.log("This is all hoisted");
}

var a = 'This is not hoisted';