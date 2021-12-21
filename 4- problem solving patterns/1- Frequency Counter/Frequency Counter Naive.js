const checkSquared = (arr1, arr2) => {
    // for creating new array
    arr2 = [].concat(arr2)

    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        let indexOfSquaredValue = arr2.indexOf(arr1[i] ** 2);
        if (indexOfSquaredValue === -1) {
            return false;
        } else {
            arr2.splice(indexOfSquaredValue, 1);
        }
    }

    return true;
}
