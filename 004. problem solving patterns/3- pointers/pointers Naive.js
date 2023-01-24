const sumZero = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-5, -1, 0, 1, 2, 3]))  //[-1, 1]

/*
** complexity O(N2)
*/