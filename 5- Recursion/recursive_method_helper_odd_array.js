const getOdds = (arr) => {

    let oddArr = [];

    getOddHelper = (smallerArr) => {
        // base case
        if(smallerArr.length === 0) {
            return;
        }

        if(smallerArr[0] % 2 !== 0) {
            oddArr.push(smallerArr[0])
        }

        getOddHelper(smallerArr.slice(1))
    }
    
    getOddHelper(arr);
    return oddArr;
}

getOdds([1, 2, 4, 5, 7, 8, 9, 10, 11])