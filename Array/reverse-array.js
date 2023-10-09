function revesresArray(arr, start, end) {

    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function printArray(arr, size) {

    for (let i = 0; i < size; i++) {
        console.log(arr[i]);
    }
}
let arr = [1, 2, 3, 4, 5, 6];
let n = arr.length;

printArray(arr, n)
revesresArray(arr, 0, n - 1);

console.log("Reversed Array is : ");
printArray(arr, n);
