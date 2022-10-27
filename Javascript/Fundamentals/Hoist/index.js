
console.log(hello);
var hello = 'world';
// var hello;
// console.log(example); //logs undefined
// hello = "world"

var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
//var needle
//function test() {
// needle is initialized and define
// test is initialized
//function with new scope is called
//needle is called as magnet string
//console.log is printing magnet and it prints because it was called and hoisted above test()


var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//brendan is initialized and defined as super cool string
// new function print is called
//brendan is defined as 'only okay' within the functions scope
//console.log prints 'only okay', but only if that function is called, which it is not
//outside the function console.log prints super cool


var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//food is initialized and defined as chicken
//chicken is printed by console.log
//eat is intialized, the function
//function is is defined and hoisted above eat()
//food is defined as half chicken string
//console.log prints half chicken within the function and gets printed because the function is called
//var food is hoisted to the top of the functions scope, but since food=half chicken is changed after it, it doesn't do anything

mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//function mean is called
//console.log food brings undefined
//var mean is defined
//food is defined as chicken
//it is printed within the function to chicken
//var food is hoisted to the top of the function but similarly has no effect because it is changed to 'chicken
//chicken is printed again
//another undefined because food is only defined within the function's scope

//actually the function is simply broken because mean is not correctly written as a function

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// genre is undefined
// var genre is initialized and defined as 'disco', but stays put because is it equalized
// function rewind is called
// function rewind is hoisted above call and defined
// inside function genre is defined as 'rock'
// it is printed as 'rock
// var genre is equalized as r and b, 
// 'r and b' is printed
// prints 'disco




dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// dojo is defined as 'san jose'
// prints 'san jose'
// learn function is called
// function learn is defined and hoisted 
// dojo is defined as 'seattle
// 'seattle' is printed
// dojo is equalized as burbank
// burbank is printed
// prints san jose

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

// function is hoisted to the top
// it is called and run twice with 2 seperate parameters
// makeDojo is defined with 2 arguments
// dojo is called as a dictionary
// dojo key value pairs are set
// if statement set that is never called 
// sytax error
