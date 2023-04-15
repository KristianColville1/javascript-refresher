/**
 * Array Methods
 * 
 * Important array methods
 * map, filter, reduce
 * 
 * follow the link here for more methods: 
 * https://www.w3schools.com/jsref/jsref_obj_array.asp 
 */

const numbers = [1, 2, 3, 4, 5, 6, 7];

// map()
// doubles each value in the array and returns the value
const doubleNumArray = numbers.map(num => { return num * 2 });

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
console.log(doubleNumArray); // [2, 4, 6, 8, 10, 12, 14]

// filter()
// Returns an array of all values in ages[] that are 18 or over
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}

// reduce()
// Probably the easiest way to understand reduce() is to return the sum of the
// elements in an array:

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10

/**
 * The reducer walks through the array element-by-element, at each step adding 
 * the current array value to the result from the previous step 
 * (this result is the running sum of all the previous steps) 
 * — until there are no more elements to add.
 */