const selectionSort = (arr) => {
    
    let minValueIndex;

    for(let i = 0; i < arr.length; i++) {
        minValueIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            // if the array element at j index is less than the array element at minValueIndex then minValueIndex = j
            if(arr[j] < arr[minValueIndex]) minValueIndex = j;
        }

        if(minValueIndex !== i) {
                // if the minValueIndex isnot the first element we swap
                [arr[minValueIndex], arr[i]] = [arr[i], arr[minValueIndex]]
        }
    }

    return arr;
}

selectionSort([3, 1, 4, 5, 2])