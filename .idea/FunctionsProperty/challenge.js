
//function constructions
(function() {


    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;

    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ':' + this.answers[i])

        }
    }

    Question.prototype.checkAnswer = function (ans, fn) {
        if (asn === this.correct) {
            console.log('correct');
            fn(true);
        } else {
            console.log('try again');
        }
    }

    Question.prototype.displayScore = function(score) {
        console.log('your current score is:' + score);
        console.log('----------------')
    }
    var q1 = new Question('Is js the coolest programming language in the world',
        ['Yes', 'No'], 0);

    var q2 = new Question('What is the nme of this cours\'s teacher?',
        ['John', 'Micheal', 'Jonas'], 2);

    var q3 = new Question('what is best describe coding?',
        ['Boring', 'Good', 'Just soso'], 0);

    var questions = [q1, q2, q3];

    function score(){
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;

            }
            return sc;
        }
    }

    var keepScore = score();

    function nextQuestion(){


        var n = Math.floor(Math.random() * question.length);

        questions[n].displayQuestion();

        var answer = prompt('please select the correct answer.');

        question[n].checkAnswer(answer);

        if(answer !== 'exit'){

            question[n].checkAnswer(parseInt(answer),keepScore);
            nextQuestion();
        }

    }

    nextQuestion();
})();

//if someone have the code hace name function and answer this will not effect it.