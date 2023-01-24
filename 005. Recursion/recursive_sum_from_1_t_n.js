const countUp = num => {

    // base case
    if(num === 1) {
        return 1;
    }

    // recursive case
    return num + countUp(num - 1);
}

countUp(3)