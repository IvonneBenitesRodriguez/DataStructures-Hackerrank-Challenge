function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }
    return arr;
}

const inputArray = [1, 2, 3, 4, 5];
reverseArray(inputArray);
console.log(inputArray); 