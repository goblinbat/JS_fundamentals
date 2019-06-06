// object. keys() and object.values()
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

