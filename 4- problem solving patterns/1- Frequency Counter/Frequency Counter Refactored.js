const checkSquared = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    let freqCounter1 = {};
    let freqCounter2 = {};

    for (let val of arr1) {
        freqCounter1[val] = (freqCounter1[val]  || 0) + 1;
    }

    for (let val of arr2) {
        freqCounter2[val] = (freqCounter2[val] || 0) + 1;
    }

    for (let key in freqCounter1) {
        if (freqCounter2[key ** 2] !== freqCounter1[key]) {
            return false;
        }
    }

    return true;
}
