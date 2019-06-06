function additiveInverse(arr) {
    let list = []
    arr.forEach(h => {list.push(-h)});
    return list
}

arra = [1, 5, -4, 18, -94]
console.log(additiveInverse(arra))


function flipWord(word) {
    let wordi = word.toLowerCase();
    let letters = wordi.split("");
    let idrow = letters.reverse().toString();
    idrow = idrow.replace(/,/g, "");
}

function animals(chickens, cows, pigs) {
    // let chickenLegs = chickens * 2;
    // let cowLegs = cows * 4;
    // let pigLegs = pigs * 4;
    // return chickenLegs + cowLegs + pigLegs
    return (chickens *2) + ((cows + pigs) *4)
}
