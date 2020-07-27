/*
    * a function is an instance of the Object type;
    * a function behaves like any other object
    * we can store functions in a varibale;
    * we can pass a function as an arguemnt to another function;
    * we can return a function from a function
    *
    * */

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for(var i = 0; i <arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2016 - el;
}

function isFullAge(limit,el){
    return el >= 18;

}

function maxHeartRate(el){
    return Math.round(206.9 - (0.67*el));
}

var ages = arrayCalc(years, calculateAge());
//20 is the present for age limit preset
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
