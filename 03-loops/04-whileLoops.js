// Not originally included, but Owen asked about them, so here's a quick lesson

let x = 0;
while (x < 5) {     // while this condition is true, do the following
    console.log(x);
    x++;            // NEED to have something that changes the codition so that the loop isn't recursive and doesn't run forever
}


do {                // do this vv
    console.log(x);
    x++ 
} while (x < 5)     // << while this condition is true
// this is guranteed to run at least once, regardless of whether the condition is met; it'll only repeat if the condition is met
