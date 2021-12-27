const getUniqueArr = arr => {
     
    // make new arr of sorted version
    arr = [].concat(arr.sort((a, b) => a - b));

    let i = 0;
    for(j = 1; j < arr.length; j++) {
        if(arr[i] != arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }

    return {
        uniqueArr: arr.slice(0, i + 1),
        uniqueElements: arr.length === 0 ? 0 : i + 1
    }
    
}

/*
 * Big O Notation is O(N)
*/
                      