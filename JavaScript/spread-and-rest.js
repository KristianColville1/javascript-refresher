/**
 * Spread & Rest Operators
 */

let oldArray = ['The', ' cat',  ' and', ' the', ' mouse.']
let oldObject = { num: 6, str: 'object' }

// spread
// Used to expand or spread array elements or an iterable
console.log(oldArray) // ['The', ' cat',  ' and', ' the', ' mouse.']
console.log(...oldArray) // The cat and the mouse.

const newArray = [...oldArray, 'They', ' lived', ' in ', ' a', ' house.']
const newObject = { ...oldObject, newProp: 5, secProp: 6 }

console.log(newArray)
console.log(...newArray); // ... They lived in a house.
console.log(newObject)
// console.log(...newObject); // error


// Very good example of use case below

const person = {
    name: 'Kristian',
    age: '25',
    occupation: 'Full Stack Software Engineer'
}

const newPerson = {
    ...person,
    interests: ['Software Engineering', 'Playing Video Games', 'Sudoku']
}

console.log(newPerson)

// Rest
// Used on functions to perform actions on an argument

/**
 * 
 * @param  {...any} args Array of objects filtered.
 * @returns the element if it is equal value and equal type '==='
 */
const filter = (...args) => {
    return args.filter(el => el === 1); // array method filter
}

console.log(filter(1, 2, 3, 3, 2, 1)) // [1, 1]