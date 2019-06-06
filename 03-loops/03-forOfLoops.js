//  go over iterable objects
// really like arrays

/**
let student = {
    name: 'peter',
    degree: 'JavaScript',
    week: 1
};

for (item of student) {
    console.log(item);
}
// This deosn't work since objects aren't iterable
*/

let catArray = ['tabby', 'calico', 'maine coon', 'american shorthair', 'rag doll', 'russian blue', 'british shorthair', 'burmese'];
for (cat of catArray){
    console.log(cat);
}