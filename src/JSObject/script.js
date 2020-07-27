//function constructor
var john = {
    name:'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

//function constructor need to be captital
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//property instead of method
Person.prototype.cal = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');


var jane = new Person('Mark', 1948, 'retired');

john.cal();
jane.cal();

console.log(john.lastName);
console.log(john.lastName);

//object create
var personProto = {
    cal: function(){
        console.log(2016 - this.yearOfBirth)
    }
};

var john1 = Object.create(personProto);

john1.name = 'John';
john1.yearOfBirth = '1990';
john1.job = 'teacher';

var jane1 = Object.create(personProto,{
    name:{ value: 'Jane'},
    yearOfBirth:{ value: 1969 },
    job:{ value: 'designer' }
});

// Primitives and objects



var a = 23;
var b = a;  //copy the value of a to b each of the variable hold the own
//copy of the data
a = 46;
console.log(a);
console.log(b);
//result is 46, 23

var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 36;
console.log(obj1.age);
console.log(obj2.age);
//result is 36 36 obj1 and obj2 is the same object point to the
//same reference

var age = 27;
var obj = {
    name: 'Jonas',
    city : 'Lisbon'
}

function chamge(a, b){
    a = 30;
    b.city = 'San Fan';
}

change(age, obj);
console.log(age);
console.log(obj.city);
//result is 27 san fan primitive does not change  the vairable outside

//functions functions are also objects
var years = [1990, 1954, 1952, 1989, 2004];
function arrayCal(arr, fn){
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
       arRes.push(fn(arr[i]));
    }
    return arrRes;
}
//fn function here call back function - function use later
function calAge(el){
    return 2016 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHearRate(el){
    return el >= 18 && el <=81 ? Math.round(206.9 - (0.67 * el)) : -1;
}

var ages = arrayCal(years, calAge);
console.log(ages);

var fullAges = arrayCal(ages, isFullAge);
console.log(fullAges);

var rates = arrayCal(ages, maxHearRate);