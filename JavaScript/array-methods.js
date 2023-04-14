/**
 * Array Methods
 */

const numbers = [1, 2, 3, 4, 5, 6, 7];

// map()
// doubles each value in the array and returns the value
const doubleNumArray = numbers.map(num => { return num * 2 });

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
console.log(doubleNumArray); // [2, 4, 6, 8, 10, 12, 14]