function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

// IIFE writing

(function(){
    var score = Math.random() * 10;
    console.log*(score >= 5);
})();
//() to invoke the function
//return true;


console.log(score);
//not defined e

(function(goodLuck){
    var score = Math.random() * 10;
    console.log*(score >= 5 - goodLuck);
})(5);
//in the () pass the argument