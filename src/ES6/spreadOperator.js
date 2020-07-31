function addFourAges(a,b,c,d){
    return a+b+c+d;
}
var sum1 = addFourAges(18,30,12,21);

//es5
var ages = [18,30,12,21];
var sum2 = addFourAges.apply(null, ages);
//es6
const max3 = addFourAges(...ages);

//join the array

const familySmith = ['John', 'Jamne', ' MArk'];
const familyMiller = ['Maary', 'aosiu'];
const bigFmialy = [...familySmith, 'LIlu', ...familyMiller];


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');