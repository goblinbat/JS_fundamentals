function hi(name) {
//           1
    console.log(`Hi, ${name}.`);
//                      2
};

hi('bat');
//   3

// 1: the parameter(s) we need to take into the function
// 2: using string interpolation, we can refer to the parameter we passed
// 3: this is where we define what the parameter's value will be


function pet(animal) {
    console.log(`you pet the ${animal}`);
};
pet('cat');
pet('fish');
pet('pufferfish');
pet('dragon');



function intro(firstname, lastname) {
    firstname = firstname.replace(firstname[0], firstname[0].toUpperCase())
    lastname = lastname.replace(lastname[0], lastname[0].toUpperCase())
    name = `${firstname} ${lastname}`
    console.log(`Hello, my name is ${name}`)
}

intro('molly', 'hopper')
