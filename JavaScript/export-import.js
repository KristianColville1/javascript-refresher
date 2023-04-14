/**
 * Exporting and Importing using JavaScript
 * 
 * Refer to greet.js as the export file and
 * here as the import file.
 */

// importing greetPerson from greet.js file
import { greetPerson } from "./greet.js";

// using greetPerson() defined in greet.js
let displayName = greetPerson("Kristian");

console.log(displayName); // Hello Kristian

// importing multiple 
import { name, sum } from "./greet.js";
console.log(name);
let add = sum(8, 9);
console.log(add); // 17

// when you want to use the module
// import in the main file
// import { newName1, newName2 } from './module.js';

// when you want to use the module
// import in the required file with different name

import { function1 as newName1, function2 as newName2 } from './module.js';