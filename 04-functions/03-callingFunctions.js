
function hi() {
    console.log('Hi, you.');
    return 'hi';   // return statements allow you to get values out of functions 
};

hi();
// this is how we call/invoke the function

// console.log(hi);    // [Function: hi]
// console.log(hi())    // 'Hi, you.' \n 'hi'
//                     // runs the function and then gives the return
//                     // returns undefined if no return statement specified

function addTwoNums(num1, num2) {
    return num1 + num2;   // return statements are particularly useful when you're doing math, data manipulation, etc
};
console.log(addTwoNums(6, 7));  // 13


function listTen() {
    list = [];
    for (i=1; i <= 10; i++) {
        list.push(i)
        // console.log(i)
    };
    return list;
};
console.log(listTen());


let arry = ['This', 'is', 'really', 'cool']
function listOut(arr) {
    for (item of arr) {
        console.log(item)
    }
}
listOut(arry)
