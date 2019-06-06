// forEach() method executes provided function for each array element
// forEach() has three arguments: currentValue, the index, and the entire array.
//  currentValue = the current element being processed in the array
//  index = the index of the current element being processed 
//  array = the array the forEach method was called upon

let food = ['macaroni', "m&m's", 'gummi worms', 'fish', 'pancakes', 'french toast', 'waffles'];
food.forEach(f => { console.log(f); });     // takes in a callback function!
food.forEach((f, number, array) => {console.log(number, f); console.log(array)});


movies = ['dot', ['goblin', 'goblin 2', 'goblin 3'], 'frog', 'fish']
movies.push('monster')
movies.splice(3, 1, 'bat')

movies.forEach(m => {(typeof m === typeof movies) ? movies[1].forEach(g => console.log(g)) : console.log(m)})
