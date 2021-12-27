const mergeTwoSortedArr = (arr1 = [], arr2 = []) => {
    let i = 0,
        j = 0,
        sortedArr = [];

    while(i < arr1.length || j < arr2.length) {
        if(arr1[i] <= arr2[j] || (i < arr1.length && j >= arr2.length)) {
            sortedArr.push(arr1[i]);
            i++;
        }

        if(arr2[j] <= arr1[i] || (j < arr2.length && i >= arr1.length)) {
            sortedArr.push(arr2[j]);
            j++;
        }
    }

    return sortedArr;
}

const mergeSort = (arr) => {
    if(arr.length === 0 || arr.length === 1) {
        return arr;
    }
    
    var mid = Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));
    return mergeTwoSortedArr(left, right);
}

mergeSort([5, 2, 1, 4])

/*
 * Time Complexity O(nlogn)
 * logn --> decomposition
 * n -----> comparison
*/



