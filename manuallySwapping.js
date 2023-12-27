// Manually Swapping --> A method for reversing large arrays
// but only if our goal is to move 
// only the largest or the smallest elements
// to their correct positions
// manual swapping might be adapted to achieve this with fewer options.
// Manually Swapping is also known as Bubble Sort.

//talking about algorithms :
// manually swapping has a poor time of complexity (On2)
// make it inefficient for large datasets.
// Algorithms of quicksort, mergesort, heapsort are better to perform large dataset.

function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    
    while( start < end ) {
        [arr[start], arr[end]] = [arr[end], arr[start]];

        start++;
        end--;
    }
    return arr;
}

let originalArray = [1,2,3,4,5];
let reversedArray = reverseArray(originalArray);

console.log("Original Array:", originalArray);
console.log("Reversed Array: ", reversedArray);

