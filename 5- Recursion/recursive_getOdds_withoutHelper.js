const getOdds = arr => {

    // base case
    if(arr.length === 0) {
        return [];
    }

    // recursive case
    return (arr[0] % 2 === 0 ? [] : [arr[0]]).concat(getOdds(arr.slice(1)));
}

getOdds([1, 2, 3, 4, 5, 6, 7])