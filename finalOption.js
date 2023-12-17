let originalArray = [1,2,3,4,5];

let newArray = Array.from(originalArray);

originalArray.reverse();

console.log(originalArray);
console.log(newArray);

// Array.from( )
//It is used to create a new, shallow-copied array instance 
//from an array-like or iterable object.
// In summary : it is like a magic tool to convert everything into an array.

// Reverse method
// it is a method used to reverse the elements of an array in place.
// constraints: it modifies the original array and it does not create a new
// array with reversed elements but instead reverses the order of the elements
//within the existing array.

