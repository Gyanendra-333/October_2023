
// Javascript implementation of above approach

// Function to show the working of Meta binary search

function bsearch(A, key_to_search) {
    let n = A.length;

    // Set number of bits to represent largest array index
    let lg = parseInt(Math.log(n - 1) / Math.log(2)) + 1;

    //while ((1 << lg) < n - 1)
    //lg += 1;

    let pos = 0;
    for (let i = lg; i >= 0; i--) {
        if (A[pos] == key_to_search)
            return pos;

        // Incrementally construct the
        // index of the target value
        let new_pos = pos | (1 << i);

        // find the element in one
        // direction and update position
        if ((new_pos < n) && (A[new_pos] <= key_to_search))
            pos = new_pos;
    }
    // if element found return pos otherwise -1
    return ((A[pos] == key_to_search) ? pos : -1);
}
let A = [-2, 10, 100, 250, 32315];
console.log(bsearch(A, 10));
