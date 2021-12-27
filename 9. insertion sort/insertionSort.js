const insertionSort = (arr) => {
    

    for(let i = 1; i < arr.length; i++) {
        for(let j = i - 1; j >= 0 && arr[i] < arr[j]; j--) {           
            if((arr[i] <= arr[j] && arr[i] >= arr[j - 1]) || (arr[i] <= arr[j] && j === 0)) {
                arr.splice(j, 0, arr.splice(i, 1)[0])
                break;
            }
        }
    }


    return arr;
}

insertionSort([6, 6, 6, 0, 1, 4, 5])