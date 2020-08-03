function isFullAge5(limit){
    console.log(arguments);
    var argsArr = Array.prototype.slice.all(arguments,1);

    argsArr.forEach(function(cur){
        console.log((2016 - cur) >= limit)
    });
}

isFullAge5(21,1990,1999,1987);

//es6
function isFullAge6(limit,...years){
    years.forEach(cur => console.log((2016 - cur) >= limit));

}
isFullAge6(21, 1998);


//default parameters
function SmithPerson(firstName, yearOfBirth, lastName='smith',
                     nationality = 'american'){

}


