var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good' + timeOfDay + ', Ladies and gentlemen I am'
                + this.name + ' a ' + this.job + this.age + 'years odd');
        } else if (style === 'friendly')
            console.log('hey am' + this.name);
    }
}

    var emily = {
        name : emily,
        age: 35,
        job: 'designer'
    };
//method bowrrowing
    john.presentation('formal', 'morning');
    john.presentation.call(emily, 'friendly', 'afternoon');


    //apply method take array

john.presentation.apply(emily, ['friendly', 'afternoon']);


//bind method similar to

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
//so we has always the friendly version
johnFriendly('night');
//bind allow the preset parameter this

var emilyFormal = john.presentation.bind(emily,'formal');
emilyFormal('afternoon');