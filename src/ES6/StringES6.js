let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
    return 2016 - year;
}
console.log(`This is ${firstName} ${lastName}. he was born in${yearOfBirth} .today he is ${calcAge(yearOfBirth)}years old`);

const n =`${firstName} ${lastName}`;
n.startsWith('J');//true
n.endsWith('th');//true
