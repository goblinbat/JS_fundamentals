/*
Farmer Jebb has brought his produce to the farmers market! He is excited because he has a new system to keep track of all the produce he sells to hipster vegans like Ronan and Kayden. He is a tech savy farmer, so hes made an array of his produce. 

let veggAmounts = [{name:'Sweet Potatoes',amount:4},{name:'Heirloom Tomatoes',amount:15},{name:'Kolrabi',amount:2},{name:'Honey Combs',amount:1}]

He also has an array of the prices for each one :
let veggPrices = [{name:'Sweet Potatoes',price:2},{name:'Heirloom Tomatoes',price:1.50},{name:'Kolrabi',price:4},{name:'Honey Combs',price:10}]

Oh no! Farmer Jebb needs both the amount and the prices to be in the same array of objects. Write a function that checks to see if each veggie in the veggAmount array has a matching veggie in the veggPrices. If they match, add that price to correct object in the veggAmounts array. Return the new array

Gathering tools is a great way to start planning your solution! Re-read the problem and see why i gathered the tools i did! 
    Tools:
    function because they asked
    for statement to cycle through objects
    object.keys object.values to check key values
    if statement to check if veggies are equal
    return to bring back new array
    dot notation to add values back into array 

   

    Make your plan here. State what needs to happen first. Make sure the steps are small enough that the goal is clear. 

    x 1) copy arrays
    x 2) use forEach for veggamounts
    x 3) use forEach for veggPrices
    x 4) match up each veg in array with corresponding veg using if statement 
    x 5) add price key/value pair to veggAmounts
    x 6) use console.log() statements to make sure they're being added
    ....make more steps if you need them! 
    
    Redo:
    x 1) use forEach for veggAmounts
    x 2) use for loop to loop through veggPrices
    x 3) check if names match
    x 4) if the do, add price to veggAmounts
    x 5) console.log results
*/
	


let veggAmounts = [
    {name: 'Sweet potatoes', amount: 4},
    {name: 'Heirloom tomatoes', amount: 15},
    {name: 'kolrabi', amount: 2},
    {name: 'Honey comb', amount: 1}
];

let veggPrices = [
    {name: 'Sweet potatoes', price: 2},
    {name: 'Heirloom tomatoes', price: 1.50},
    {name: 'kolrabi', price: 4},
    {name: 'Honey comb', price: 10}
];

// * nested forEach statements
function vegiStand() {
    veggAmounts.forEach(v => {
        veggPrices.forEach(p => {
            if (v.name === p.name) {
                v['price'] = p.price;
                // console.log(`added ${p.price} to ${v.name}!`)
            };
        });
    });
    return veggAmounts;
};
console.log(vegiStand());


//* single forEach
function vegiStand2() {
    veggAmounts.forEach(v => {
        for (i=0; i<veggPrices.length; i++){
            if (v.name == veggPrices[i].name) {
                v['price'] = veggPrices[i].price;
                console.log(`added price to ${v.name}!`)
            };
        }
    });
    return veggAmounts;
};
console.log(vegiStand2());


//* no forEach
function instructorStand() {
    for(let i=0; i<veggAmounts.length; i++) {       // this works iff the arrays have the same vegetables at the same indices
        if (veggAmounts[i].name == veggPrices[i].name) {
            veggAmounts[i].price = veggPrices[i].price;
        }
    }
    return veggAmounts;
}
console.log(instructorStand());
