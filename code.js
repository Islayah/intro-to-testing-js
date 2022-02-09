'use strict';
// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
/*
var input = "Pat";
function sayHello() {
    if (input === "Alex") {
        return "Hello, Alex!";
    } else if (input === "Jane") {
        return "Hello, Jane!";
    } else {
        return "Hello, Pat!";
    }
}*/

// sayHello function refactor
let input = "Alex";
function sayHello() {
    return "Hello, " + input + "!";
}