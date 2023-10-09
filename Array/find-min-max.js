function getMin(arr, n) {
    let result = arr[0];

    for (let i = 0; i < n; i++) {
        result = Math.min(result, arr[i]);
        return result;
    }
}
function getMax(arr, n) {
    let result = arr[0];

    for (let i = 0; i < n; i++) {
        result = Math.max(result, arr[i]);
        return result;
    }
}
let arr = [1, 2, 3, 4, 5, 6];
let n = arr.length;

console.log("Minimum Element is : " + getMin(arr, n));
console.log("Maximum Element is : " + getMax(arr, n));