const howMany = (pattern, str) => {
    let counter = 0;

    for(var i = 0; i < str.length; i++) {
       for(let j = 0; j < pattern.length; j++) {
           
           if(str[i + j] !== pattern[j])  break;    // no match
           if (j === pattern.length - 1) counter++; // totally matched       
       }
    }

    return counter;
}

console.log(howMany('ab', 'abcdabn'))