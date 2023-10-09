// // Iterative Javascript program to reverse an array

// /* Function to reverse arr[] from start to end*/
// function rvereseArray(arr, start, end) {
//     while (start < end) {
//         var temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
// }

// /* Utility function to print an array */
// function printArray(arr, size) {
//     for (var i = 0; i < size; i++) {
//         console.log(arr[i]);
//     }
// }

// /* Driver function to test above functions */
// var arr = [1, 2, 3, 4, 5, 6];
// var n = 6;
// // To print original array
// printArray(arr, n);

// // Function calling
// rvereseArray(arr, 0, n - 1);

// console.log("Reversed array is");

// // To print the Reversed array
// printArray(arr, n);







// JavaScript program to find minimum
// (or maximum) element in an array.

function getMin(arr, n) {
    let res = arr[0];

    for (let i = 1; i < n; i++)
        res = Math.min(res, arr[i]);

    return res;
}

function getMax(arr, n) {
    let res = arr[0];

    for (let i = 1; i < n; i++)
        res = Math.max(res, arr[i]);

    return res;
}

let arr = [12, 1234, 45, 67, 1];
let n = arr.length;

console.log("Minimum element of array: " + getMin(arr, n));
console.log("Maximum element of array: " + getMax(arr, n));
