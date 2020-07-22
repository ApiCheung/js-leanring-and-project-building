function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is');
        }
    }else if(job === 'teacher'){
        return function(name){
            console.log('what subject do you teach, ' + name );
        }

    }else{
        return function(name){
            console.log('hello' + 'what do you do?');
        }
    }

}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');

//could use in this way
interviewQuestion('teacher')('Mark');