//using the method slice together with the reverse method 
// to avoid modifications in the original array

let myArray = [1,2,3,4,5];
let reversedArray = myArray.slice().reverse();

console.log(reversedArray);
console.log(myArray);