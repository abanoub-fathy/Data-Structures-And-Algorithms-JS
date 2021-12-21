const isAnagram = (str1, str2) => {
    // no match in the length
    if (str1.length !== str2.length) return false;
    
    // create an object 
    let obj = {}
    // store the frequency counter for each char
    for (let c of str1) {
        obj[c] = (obj[c] || 0 ) + 1;
    }
    
    // loop through the other string
    for (let c of str2) {

        if(!obj[c]) {   // if the key not exist or the counter is 0 we return false
            return false;
        } else {    // if the key exist return 1 from the counter
            obj[c] -= 1;
        }
    }

    return true;
}