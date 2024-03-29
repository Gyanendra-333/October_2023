// Iterative Javascript program to reverse an array
/* Function to reverse arr[] from start to end*/

function rvereseArray(arr, start, end) {
    while (start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

/* Utility function to print an array */

function printArray(arr, size) {
    for (let i = 0; i < size; i++) {
        console.log(arr[i]);
    }
}

let arr = [1, 2, 3, 4, 5, 6];
let n = 6;

// To print original array 
printArray(arr, n);

// Function calling 
rvereseArray(arr, 0, n - 1);

console.log("Reversed array is");

// To print the Reversed array 
printArray(arr, n); 
