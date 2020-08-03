const quetion  = new Map();
quetion.set('quetion', 'What is the official name of the latest major' +
    'javascript version');
quetion.set(1,'es1');
quetion.set(2,'ws2');
quetion.set(3,'es2015');
quetion.set('correct', 3);
quetion.set('false','try');
quetion.set('true', 'correct answer');

console.log(quetion.get('question'));
quetion.size;
quetion.delet(4);
if(quetion.has(4)){
    quetion.delete(4);
}

//loop through the map
quetion.forEach((value, key) => console.log('this is ${key}'));

for(let [key, value] of quetion.entries()){
    console.log('this is ${key},${value}');

}
const ans = parseInt(prompt('Write the correct answer'));

quetion.get(ans === quetion.get('correct'));