//First method -- reverse method in JavaScript for arrays:
function reverseArray(arr) {
    return arr.reverse();
}
const inputArray = [1,2,3,4,5];
const reversedArray = reverseArray(inputArray);
console.log(reversedArray);

//reverse method:
//The reverse method for arrays does reverse the elements 
// of an array in place

//constraints or limitations :
//Not Suitable for Immutable Arrays:
//Immutability Concerns: If you are working with immutable data structures:
// Immutable Arrays: arrays that are created using --> map, filter, concat
// or using functional programming concepts like:
//Immutable.js provide data structures like List that are persistent and immutable
// Ex: 
// const { List } = require('immutable');
// In case of using immutable Arrays or Functional Programming:
// using reverse directly may conflict with the idea of immutability.
// In such cases, creating a reversed copy 
//using other methods like:
// the spread operator ([...arr].reverse()) or Array.from(arr).reverse() 
//might be more appropriate.

//Performance:
//Inefficient for Large Arrays: 
//The reverse method has a time complexity of O(n/2), 
//making it relatively efficient for small arrays. 
//However, for very large arrays, 
// its performance may become a consideration. 
//In such cases, 
//alternative approaches like manually swapping elements might be more performant.