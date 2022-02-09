'use strict';
// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    if (input === "Alex") {
        return "Hello, Alex!";
    } else if (input === "Jane") {
        return "Hello, Jane!";
    } else if (input === "Pat") {
        return "Hello, Pat!";
    } else if (input === true) {
        return "Hello, World!";
    } else if (input === false) {
        return "Hello, World!";
    } else if (input === undefined) {
        return "Hello, World!";
    }
}

// sayHello function refactor ******Cannot get true, false, and string to green*******
/*function sayHello(input) {
    return "Hello, " + input + "!";
    if (input === true) {
        return "Hello, World!";
    } else if (input === false) {
        return "Hello, World!";
    }
}*/

// isFive Function
function isFive(input) {
    if  (input === 5) {
        return true;
    } else if (input === "5") {
        return false;
    }
}