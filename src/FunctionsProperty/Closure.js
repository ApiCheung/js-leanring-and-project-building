function retirement(retirementAge){
    var a ='year left until retirement';
    //even the function is return a is still usable
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUs = retirement(66);
retirementUs(1998);

//or

retirement(66)(2020);

/*
* An inner functionhas always access to the variables and parameters
* of its outer function, even after the outer function has returned
*
* the execution context on the top stack
*
*
* */

function interViewQuestion(job){
    return function(name){
        if(job === 'teacher'){
            console.log('what do you do')
        }else if(job === 'designer'){
            console.log('explain it')
        }else{
            console.log('what is your job');
        }
    }
}

interViewQuestion('teacher')('john');


