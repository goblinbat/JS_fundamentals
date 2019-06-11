// Mine (it's mess; i'm way too tired to think clearly)
// function igpay(str) {
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     let words = str.split(' ')
//     for (let x = 0; x=words.length; x++){
//         let word = words[x]
//         let letters = word.split('');
//         if (letters[0] in vowels){
//             let tr = letters.join('');
//             let trsay = `${tr}ay`;
//             return `${str}; ${trsay}`;
//         } else {
//             let first = letters.shift();
//             letters.push(first);
//             let tr = letters.join('');
//             let trsay = `${tr}ay`;
//             return `${str}; ${trsay}`;
//         }

//     }
// }
// igpay('goblin')
// console.log(igpay('at'));


// instructor
function igpayAtinlay(str) {
    let words = str.split(' ');
    words. forEach((word, index) => {
        let letters = word.toLowerCase().split('')
        if(letters[0] !=='a' && letters[0] !=='e' && letters[0] !=='i' && letters[0] !=='o' && letters[0] !=='u'){
            letters.push(letters[0]);
            letters.shift();
        }
        letters.push('ay');
        words[index] = letters.join('');
    })
    return words.join(' ');
}
console.log(igpayAtinlay('this is way better than mine'));