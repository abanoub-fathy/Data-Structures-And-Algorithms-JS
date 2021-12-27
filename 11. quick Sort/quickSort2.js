const quickSort = (arr) => {

    // base case
    if(arr.length < 2) return arr;

    // recurisve case

    // pick a random pivot
    let pivotIndex = Math.floor(Math.random() * arr.length);
    let pivot = arr[pivotIndex];
    let left = [];
    let right = [];

    // make  array of the elements less than pivot and greater than it
    for(let i = 0; i < arr.length; i++) {
        if(i === pivotIndex) {
            continue;
        }

        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    
    // call the recursive case again
    return quickSort(left).concat([pivot], quickSort(right));
} 

quickSort([7, 5, 3, 2, 8, 1, 5])