let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors.length);
console.log(colors.toString());
console.log(colors.forEach(color => console.log(color)));
// color = colors.toString();
// color = color.replace(/,/g, ', ');
// console.log(color);

arr = [2, 'blue', true, 'flu'];
if (arr instanceof Array) {
    rev = arr.reverse().forEach(num => console.log(num));
    // let rev = arr.reverse();
    // console.log(rev);
    // rev.forEach(num => console.log(num));
} else {
    console.log('not an array');
}