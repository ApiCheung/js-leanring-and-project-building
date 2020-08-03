//es5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge =
    function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
    }

    var john5 = new Person5('John', 1990, 'teacher');

var Athlete5 = function(name, yearOfBirth, job, olmicGames, medals){
    Person5.call(this, name, yearOfBirth,job);
    this.olmicGames = olmicGames;
    this.medals = medals;
}
//make inheritance work
Athlete5.prototype = Object.create(Person5.prototype);


Athlete5.prototype.wonMedal = function(){
    this.medals ++;
    console.log(this.medals);
}


var johnAthlete5 = new Athelete5('John', 1990, 'swimmer',3,10);

johnAthlete5.calculateAge();
//es6

class Person6{

    constructor(name, yearOfBirth, job) {
        this.name=name;
        this.yearOfBirth=yearOfBirth;
        this.job=job;
    }
    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);

    }
    //static not inherited

    // static greeting(){
    //     console.log('hey there!');
    //}

}

class Athelete6 extends Person6{
    constructor(name, yearOfBirth, job, olymicGames, medals) {
        super(name, yearOfBirth, job);
        this.olymucGames = olymicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medal ++;
    }
}

const john6 = new Person6('John', 1990, 'teacher');

Person6.greeting();

const johnAthlete6 = new Athelete6('john',1990, 'swimmer',3,10);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();