// This was a homework assignment in codesandbox

function checker(word) {
    let wordi = word.toLowerCase();
    let letters = wordi.split("");
    let idrow = letters.reverse().toString();
    idrow = idrow.replace(/,/g, "");        // this /,/g makes it global, effecting all commas in the string instead of just the first one

    if (wordi === idrow) {
        console.log(wordi);
        return wordi;
    } else {
        console.log("This is not a palindrome");
        return "This is not a palindrome";
    }
}
 


// // Owen was using a reverseString method but it wasn't working, and i wanted to test it to help and because this would be a useful function to have
// function checker2(word) {
//     drow = word.reverseString()
//     console.log(drow)
//     // let wordi = word.toLowerCase();
//     // let letters = wordi.split("");
//     // let idrow = letters.reverse().toString();
//     // idrow = idrow.replace(/,/g, "");        // this /,/g makes it global, effecting all commas in the string instead of just the first one

//     if (word === drow) {
//         console.log(word);
//         return word;
//     } else {
//         console.log("This is not a palindrome");
//         return "This is not a palindrome";
//     }
// }

// checker2('pow')