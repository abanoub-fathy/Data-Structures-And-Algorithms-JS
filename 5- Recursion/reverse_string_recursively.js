const rev = str => {
    // base case
    if(str.length === 1) {
        return str;
    }

    // recursive case
    return str[str.length - 1] + rev(str.slice(0, str.length - 1));
}

rev("Hello")