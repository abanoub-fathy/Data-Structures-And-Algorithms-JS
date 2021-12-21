const binSearch = (arr, element) => {
    var l = 0,
        r = arr.length - 1,
        mid = Math.floor((l + r) / 2);

    var i = 0;
    while(l <= r) {
        if(arr[mid] === element) {
            return mid;
        }

        if(arr[mid] < element) {
            l = mid + 1
        }

        if(arr[mid] > element) {
            r = mid - 1;
        }

        mid = Math.floor((l + r) / 2);
        console.log(++i);
    }

    return -1;
}

/*
 * Divide and conquer approach
 * Big O Notation is O(log N)
*/