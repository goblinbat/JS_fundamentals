// lists of items (basically just like lists in python)
// go inside [square, brackets]
// can hold multiple datatypes
// all items separated by commas

let groceryList = ['cat litter', 'deordorant', 'macaroni', 'chips', 'dog food'];
console.log(groceryList[2]); // macaroni

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 4, true, ['Molly', 'Owen', 'Natasha', 'Brian', 'Garret', 'Cory', 'Suraj', 'Megan', 'Patrick']];
console.log(typeof students);
console.log(students instanceof Array);
console.log(`Hello, ${students[6][2]}, you look nice today`);    // Natasha


// Populating and Referring
let food = ['macaroni', "m&m's", 'gummi worms', 'fish', 'pancakes', 'french toast', 'waffles'];

food.push('garlic bread', 'spaghetti', 'breadsticks', 'eggs and toast');    // adds items to end of array
food.splice(2, 1, 'sour gummi worms');  // index of (first) item to be deleted, how many items to delete, things to replace them with (opt)
food.pop();     // removes last item in array
food.shift();   // removes first item in array
food.unshift('macaroni and cheese', 'chips and dip'); // inserts elements to the start of the array

for (f of food) {
    console.log(f);
}

