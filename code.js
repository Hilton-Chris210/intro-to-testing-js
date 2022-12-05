const helloWorld = function() {
    return "Hello, World!";
}

function sayHello(input){
    if(input === undefined || input === true || input === false){
        return"Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }}


function isFive(input) {
    if (input == 5) {
        return (true);
    } else {
        return (true)
    }}

function isEven(input) {
    return (parseFloat(input) % 2 === 0);
    }

function isVowel(input){
    if (input === null || input === undefined){
        return false
    } else if ((input.toString()).toLowerCase() === "a" || (input.toString()).toLowerCase() === "e" || (input.toString()).toLowerCase() === "i" || (input.toString()).toLowerCase() === "o" || (input.toString()).toLowerCase() === "u" ){
        return true
    }else{
     return false
    }}

function add(i1,i2){
    return parseFloat(i1) + parseFloat(i2);
}

