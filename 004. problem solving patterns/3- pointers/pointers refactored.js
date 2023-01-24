const sumZero = (arr) => {
    let left = 0,
        right = arr.length - 1;

    while(left < right) {
        if(arr[left] + arr[right] === 0) {
            return [arr[left], arr[right]]
        } else if(arr[left] + arr[right] < 0) {
            left++;
        } else {
            right--;
        }
    }
}

console.log(sumZero([-5,-4, 0, 2, 3, 4]))   //[-4, 4]