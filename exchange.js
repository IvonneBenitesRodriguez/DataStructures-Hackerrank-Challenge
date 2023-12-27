function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1

    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];

        start++;
        end--;
    }

    return arr;
}

let originalArray = [1,2,3,4,5];
let reversedArray = reverseArray(originalArray);

console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);