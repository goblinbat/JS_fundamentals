//* object. keys() and object.values()
// object.keys() returns an array of a given object's own property names
// object.values() returns array of given object's own enumerable property values, in the same order as a for...in loop (except for...in loop enumerates prototype chain as well)

let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
}

// console.log(Object.keys(spaceJam.toonSquad));
// console.log(Object.keys(spaceJam.toonSquad)[3])
// console.log(Object.keys(spaceJam.toonSquad.duck));
// console.log(Object.keys(spaceJam.toonSquad).toString());

// console.log(Object.values(spaceJam.toonSquad));
// console.log(Object.values(spaceJam.toonSquad)[3]);
// console.log(Object.values(spaceJam.toonSquad.duck));
// console.log(Object.values(spaceJam.toonSquad).toString());



//* Square Bracket Notation
// can help us find a value in an object. handy if we need to set a key to a variable and then use that variable to parse through an object

let garden = {
  vegetable : 'zucchini',
  flower: 'sunflower',
  fruit: 'apple',
  water: true,
  sun: true,
  size: 10
};

console.log(garden.water);    // using dot notation; requires you to know that there's a key named 'water'; it needs to already exist

let x = 'water';
console.log(garden[x]);       // using square bracket notation; still seems to require you to know that there's a key named 'water'??

let baking = {};
baking['zucchini'] = 'better make some bread';  // this adds a key/value pair to the object
console.log(baking[garden['vegetable']]);   // 'better make some bread'
  // garden['vegetable] == 'zucchini'  ==>  baking['zucchini'] == 'better make some bread

let pie = {};
pie['apple'] = 'Pie, pie, me oh my';
console.log(pie[garden['fruit']]);   // 'pie, pie, me oh my'
console.log(pie.apple);   // 'pie, pie, me oh my'

let key = 'water';
Object.keys(garden).forEach(h => {
  if ( key === h ) {
    // console.log(garden[key]);
    console.group('Let\'s water the garden');     // console.group is basically console.log, but it'll nicely format things if you're logging a bunch of data (esp if it's reapeating)
  } else {
    console.group('Don\'t water the garden now');
  }
});