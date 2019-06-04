let w = 6;

// If statement
if (w>0){
    console.log('yes');
} else {
    console.log('no');
}

// OR
// Ternary
(w>0) ? console.log('yes') : console.log('no');
/**1  2     3              4      5
 * 1) statement to evaluate
 * 2) check (question) if true
 * 3) do this if true
 * 4) else
 * 5) do this if false
 */

// Can have more than 1 evaluative statement (just add another (statement), ?, and action)
 (w==0) ? console.log('hello') : (w<0) ? console.log('hi') : console.log('goodbye');


 let age = 23;
 (age >= 25) ? console.log('you can rent a car') : (age >= 21) ? console.log('you can drink') : (age >= 18) ? console.log('you can vote') : console.log("you're too young to do much");