const power = (base, e) => {
    if(e === 1) {
        return base;
    }

    return base * power(base, e - 1);
}

power(2, 7)