## The idea or principle of Immutability
## Refers that once a Data Structure such as an array or an object is created,
## it can not be modified.

## Ex:
## Mutable Approach:
## let mutableArray = [1,2,3];
## mutableArray.push(4); ---> modifies the original array

## Immutable Approach:
## let immutableArray = [1,2,3];
## let newArray = [...immutableArray, 4]; ----> creates a new array with the desired changes.

## Note:
## If you want to create a new array with the reversed order without modifying 
## the original one, you can use the spread operator (`...`) or 
## the slice method.

## Using the slice method together with reverse method to avoid modifications in the array:
## let myArray = [1,2,3,4,5];
## let reversedArray = myArray.slice().reverse();

## console.log(reversedArray);
## console.log(myArray);