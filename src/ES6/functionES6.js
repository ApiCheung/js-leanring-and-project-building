const years = [1996, 1965, 1983, 1984];

let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => 'Age element ' +
    '${index + 1}: ${2016 - el}.');
console.log(ages6);
ages6 = years.map((el,index) => {
    const now = new
        Date().getFullYear();
    const age = now - el;
    return 'Age element ' +
    '${index + 1}: ${age}.'
});

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click',
            function(){
            var str = 'this is box ' + this.position;
            alert(str);
            });
        }
}
//this refer to the window not box5
//method call this refer to the object regular function call
//point to the window

var box51 = {
    color: 'green',
    position: 1,
    clickMe: function(){

        var self = this;
        document.querySelector('.green').addEventListener('click',
            function(){
                var str = 'this is box ' + self.position;
                alert(str);
            });
    }
}
//result is  point to the object

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click',
            () => {
                var str = 'this is box ' + this.position;
                alert(str);
            });
    }
}


function Person(name){
    this.name = name;
}

Person.prototype.myFriends =
    function(friends){
    var arr = friends.map(function(el){
        return this.name + 'is friends with ' + el;

        });
    console.log(arr);
    }

    var friends=['Bob','Jane','MARK'];
new Person('john').myFriends(friends);
//name not defined golbal object
function Person(name){
    this.name = name;
}

Person.prototype.myFriends =
    function(friends){
        var arr = friends.map(function(el){
            return this.name + 'is friends with ' + el;

        }.bind(this));
        console.log(arr);
    }

var friends=['Bob','Jane','MARK'];
new Person('john').myFriends(friends);

//deconstrut
const [ name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstname:'John',
    lastname: 'smith'
};


//destructing
const{firstname, lastname} =  obj;


const{firstNmae: a, lastname: b} = obj;


function calcAgeREetirement(year){
    const age = new Date().getFullYear() - year;
    return [agae, 65 - age];
}


const[age, retirement] = calcAgeREetirement(1990);
//




const boxes =  document.querySelectorAll('.box');
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.bcakgroundColor = 'dodgerblue';
});

//ex6

const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');



//loop

for(var i = 0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === 'blue'){
        continue;
    }
    boxesArr5[i].textContent = 'Ichangfed to blue';
}

//ex6
for(const cur of boxesArr6){
    if(cur.className.includes('blue')) continue;
}

//es5

var ages = [12,14,4,12,55,31];

var full = ages.map(function(cur){
    return cur >= 18;
});

full.indexOf(full);
console.log(ages[full.indexOf(true)]);

//es6
ages.findIndex(cur => cur >= 18);
console.log(ages.find(cur => cur >= 18));




