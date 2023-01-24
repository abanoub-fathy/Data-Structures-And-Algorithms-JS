const bubbleSort = arr => {
    let swap = false;

    for(let i = 1; i < arr.length; i++) {
        swap = false;
        for (let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true;
            }
        }
        if(!swap) break;
    }

    return arr;
}

bubbleSort([5, 1, 3, 0, 2])