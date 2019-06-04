/**
 * Scope: where a variable is defined and accessible
 * Global scope: variables available to whole program or project
 * Local scope: variables only available within function or specific file
 * 
 * local variables take priority over global variables
 */

 var x = 12;            // global
 function scope() {
     var x = 33;       // local
     console.log(x);  // 33
 }
 scope();
 console.log(x);  // 12


 // Note, though:
 var y = 12;
 function scope2() {
     y = 33;          // reinitializes y instead of declaring a new y
     console.log(y);  // 33
 }
 scope2();
 console.log(y);  // 33


 var z = 12;            
 function scope3() {
     var z = 33;       
     if(1 == 1){
         var z = 45;
         console.log(z) // 45
     }
     console.log(z);  // 45
 }
 scope3();
 console.log(z);  // 12


 var a = 12;
 function scope4() {
     var x = 33;
     if(true){
         let a = 45;        // 'let' has block scope built in; it's locked into this if code block; "let respects boundaries, var bleeds" out of code blocks
         console.log(a);    // 45
     }
     console.log(a);        // 33
 }
 scope4();
 console.log(a);            // 12

function scope5() {
    const b = 1;
    if(true) {
        const b = 2;        // const, like let, has block scope and won't bleed out of the block it's defined in
        console.log(b);     // 2
    }
    console.log(b);       // 1
}
scope5()
