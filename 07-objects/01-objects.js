/**************************
OBJECTS
***********************
An object is a data type that constists of key/value pairs. 

let name = {
    (1)    (2)
  key   :   'value';
  (3)  (4)    (5)
}
1- Name of the object, how its identified
2- All of the data for an object is contained in curly braces
3- this is the name of the specific data inside the object
4- The data name and value are separated by a colon
5- The value of the data. Each key/value pairing ends with a comma 
*/

let netflix = {
    id: 9,
    name: "Super Store",
    season1: {
        seasonInfo: {
            episodeInfo : [
            { episode: 1, episodeName: "Pilot", description: 'Rhys and her co-workers must clean their store before manager Janice notices the mess.'},
            { episode: 2, episodeName: "Magazine Profile", description: "Janice overhypes the store to a reporter and the others deal with the rush."},
            { episode: 3, episodeName: "Shots and Salsa", description: "Jamie and Rhys go for drinks and get hungover. Roger comes to check in on the store."},
            { episode: 4, episodeName: "Mannequin", description: "Janice reveals her fear of mannequins and the others try to help her overcome it."},
            { episode: 5, episodeName: "Shoplifter", description: "Rhys and Jamie must catch a shoplifter. Janice gets in a fight with Roger."}
            ]
        }
    },
    season2: {
        seasonInfo: {
            episodeInfo : [
            { episode: 1, episodeName: "Secret Shopper", description: "Janice hears Roger's sending a secret shopper and pushes everyone to their limits."},
            { episode: 2, episodeName: "Color Wars", description: "Jamie and Daniel have different opinions on what color the store should be repainted."},
            { episode: 3, episodeName: "Wedding Day Sale", description: ""},
            { episode: 4, episodeName: "All-Nighter", description: ""},
            { episode: 5, episodeName: "Demotion", description: ""},
            { episode: 6, episodeName: "Labor", description: ""}
            ]
        }
    },
    season3: {}
};

console.log('ALL DATA => ', netflix);   // get a shortened, summary version do as not to put too much in the terminal
console.log('Just season 2 data => ', netflix.season2.seasonInfo);
console.log('Episode title => ', netflix.season2.seasonInfo.episodeInfo[4].episodeName)
console.log('First episode => ', netflix.season1.seasonInfo.episodeInfo[0].episode, ':', netflix.season1.seasonInfo.episodeInfo[0].episodeName)
