/**
 * Understanding JavaScript Variables
 */

/***************************************************** Global Scope */
// program to print a text 
let a = "hello";

function greet () {
    console.log(a);
}

greet(); // hello

//In the above program, variable a is declared at the top of a program
// and is a global variable.It means the variable a can be used anywhere in the program.


// program to show the change in global variable
let b = "hello";

function greet() {
    b = 3;
}

// before the function call
console.log(b);

//after the function call
greet();
console.log(b); // 3

/**
 * In the above program, variable a is a global variable. 
 * The value of a is hello. 
 * Then the variable a is accessed inside a function and the value changes to 3.

Hence, the value of a changes after changing it inside the function.
 */


/***************************************************** Local Scope */

// A variable can also have a local scope, i.e it can only be accessed within a function.
// program showing local scope of a variable
let c = "hello";

function greet() {
    let d = "World"
    console.log(c + d);
}

greet();
console.log(c + d); // error


// program showing block-scoped concept
// global variable
let e = 'Hello';

function greet2() {

    // local variable
    let f = 'World';

    console.log(e + ' ' + f);

    if (f == 'World') {

        // block-scoped variable
        let g = 'hello';

        console.log(e + ' ' + f + ' ' + g);
    }

    // variable g cannot be accessed here
    console.log(e + ' ' + f + ' ' + g);
}

greet2();

/***************************************************** Let & Const */

// While you can use var it is highly recommended that you use let & const
// for declaring your variables so that your semantics are correct throughout your program
// and it runs as expected.

let letVar = 0;
const constVar = 0; // for values that don't change