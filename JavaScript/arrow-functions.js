/**
 * JavaScript Arrow Function
 *
 * -Arrow function is one of the features introduced in the ES6 version of JavaScript.
 *  It allows you to create functions in a cleaner way compared to regular functions.
 */

// function expression
let x = function (x, y) {
    return x * y;
};

// using arrow functions
let x2 = (x, y) => x * y;

// Arrow function syntax

/**
 * myFunction is the name of the function
    arg1, arg2, ...argN are the function arguments
    statement(s) is the function body
 */
let myFunction = (arg1, arg2, ...argN) => {
    statement(s);
};

// Arrow function with no argument

let noArgument = () => console.log("No argument!");

// Arrow function with one argument
let oneArgument = (z) => console.log(z);
oneArgument("This function call has one argument"); // This function call has one argument

// Multiple Arrow functions
// If a function body has multiple statements, you need to put them inside curly brackets {}
let sum = (a, b) => {
    let result = a + b;
    return result;
};

let result1 = sum(5, 7);
console.log(result1); // 12

/**
 * Using 'this' with arrow functions ----------------------------------------------------
 */

// nside a regular function, this keyword refers to the function where it is called.

//However, this is not associated with arrow functions. Arrow function does not
// have its own this.So whenever you call this, it refers to its parent scope.

function Person() {
    (this.name = "Kristian"),
        (this.age = 25),
        (this.sayName = function () {
            // this is accessible
            console.log(this.age); // 25

            function innerFunc() {
                // this refers to the global object
                console.log(this.age); // undefined
                console.log(this); // {}
            }

            innerFunc();
        });
}

let a = new Person();
a.sayName();

// Here, this.age inside this.sayName() is accessible because this.sayName()
// is the method of an object.

// However, innerFunc() is a normal function and this.age is not accessible
//  because this refers to the global object(Window object in the browser).
//     Hence, this.age inside the innerFunc() function gives undefined.
function Person2() {
    (this.name = "Kristian"),
        (this.age = 25),
        (this.sayName = function () {
            console.log(this.age); // 25
            let innerFunc = () => {
                console.log(this.age); // 25
            };

            innerFunc();
        });
}

const b = new Person2();
b.sayName();
