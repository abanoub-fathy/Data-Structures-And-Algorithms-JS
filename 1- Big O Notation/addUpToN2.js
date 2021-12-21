const addUpToN = n => {
    
    return n * (n + 1) / 2;
}

let t1 = performance.now();
addUpToN(1e10);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);
