/**
 * Reference and Primitive Types
 */

// Here's a really interesting example:
let apple = 'apple';
let secondApple = apple;

console.log(apple); // apple
console.log(secondApple); // apple

apple = null; // changed the value of apple
console.log(apple); // null
console.log(secondApple); // apple

/**
 * What's going on?
 * I referenced the apple variable
 * using secondApple and it has the original value??
 */

// string, char, boolean and int are all primitive types

// Here's another example:
let person = {
    age: 25,
    occupation: 'Software Engineer'
}

let secondPerson = person;

console.log(person.age); // 25
console.log(secondPerson.age); // 25

person.age = 26; // changed the value of person
console.log(person.age); // 26
console.log(secondPerson.age); // 26

/**
 * Objects and Arrays are reference types.
 * When you reference a primitive type you copy the value you referenced.
 * 
 * when you reference a reference type you reference the object or array,
 * essentially pointing to the object you referenced. In this case,
 * secondPerson points to person. secondPerson is a pointer.
 */

// How to copy objects and arrays in an immutable way:

let thirdPerson = { ...person }; // uses spread operator to copy object

let newArray = [1, 2, 3];
let secondArray = [...newArray]; // uses spread operator to copy array